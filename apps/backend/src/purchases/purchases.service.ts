import { BadRequestException, Injectable, Logger, NotFoundException } from '@nestjs/common';
import { CreatePurchaseDto } from './dto/create-purchase.dto';
import { UpdatePurchaseDto } from './dto/update-purchase.dto';
import { PrismaService } from '../prisma/prisma.service';
import { ConfigService } from '@nestjs/config';
import { IssuerService } from '../issuer/issuer.service';
import { CertificatesService } from '../certificates/certificates.service';
import { BuyersService } from '../buyers/buyers.service';

@Injectable()
export class PurchasesService {
  private readonly logger = new Logger(CertificatesService.name, { timestamp: true });

  constructor(
    private prisma: PrismaService,
    private configService: ConfigService,
    private certificatesService: CertificatesService,
    private issuerService: IssuerService,
    private buyersService: BuyersService
  ) {}

  async create(createPurchaseDto: CreatePurchaseDto) {
    const { filecoinNodes, ...purchase } = createPurchaseDto;

    if (filecoinNodes.length > 1) {
      throw new BadRequestException('only one filecoin node per transaction allowed');
    }

    return await this.prisma.$transaction(async (prisma) => {
      const newRecord = await prisma.purchase.create({ data: purchase });

      if (filecoinNodes) {
        await prisma.filecoinNodesOnPurchases.createMany({
          data: filecoinNodes.map((n) => ({
            buyerId: newRecord.buyerId,
            purchaseId: newRecord.id,
            filecoinNodeId: n.id
          }))
        });
      }

      const certData = await this.certificatesService.findOne(purchase.certificateId);

      const chainCertData = await this.issuerService.getCertificateByTransactionHash(certData.txHash);

      if (!chainCertData) {
        throw new NotFoundException(`no chain data for certificate ${certData.id} (txHash=${certData.txHash})`);
      }

      this.logger.debug(`fetched certificate chain data: ${JSON.stringify(chainCertData)}`);

      const buyerData = await this.buyersService.findOne(purchase.buyerId);

      if (!buyerData.blockchainAddress) {
        throw new Error(`buyer ${purchase.buyerId} has no blockchain address assigned`);
      }

      let accountToRedeemFrom: string;

      this.logger.debug(`transferring on-chain certificate (id=${purchase.certificateId}, issuerApiId=${chainCertData.id}) to buyer (id=${buyerData.id}, blockchainAddress=${buyerData.blockchainAddress})`);
      const { txHash: txHash1 } = await this.issuerService.transferCertificate({
        id: chainCertData.id,
        amount: purchase.recsSold.toString(),
        fromAddress: this.configService.get('ISSUER_CHAIN_ADDRESS'),
        toAddress: buyerData.blockchainAddress
      })

      this.logger.debug(`certificate transfer initiated, txHash=${txHash1}`);

      const filecoinNode = filecoinNodes[0];

      if (filecoinNode) {
        const filecoinNodeData = await this.prisma.filecoinNode.findUnique({ where: { id: filecoinNode.id } });

        if (!filecoinNodeData.blockchainAddress) {
          throw new Error(`filecoin node ${filecoinNode.id} has no blockchain address assigned`);
        }

        this.logger.debug(`transferring on-chain certificate (id=${purchase.certificateId}, issuerApiId=${chainCertData.id}) to filecoin node (id=${buyerData.id}, blockchainAddress=${buyerData.blockchainAddress})`);
        const { txHash: txHash2 } = await this.issuerService.transferCertificate({
          id: chainCertData.id,
          amount: purchase.recsSold.toString(),
          fromAddress: buyerData.blockchainAddress,
          toAddress: filecoinNodeData.blockchainAddress
        });
        this.logger.debug(`certificate transfer initiated, txHash=${txHash2}`);

        await prisma.purchase.update({
          data: { txHash: txHash2 },
          where: { id: newRecord.id }
        });

        accountToRedeemFrom = filecoinNodeData.blockchainAddress;
      } else {
        this.logger.debug(`no fielcoin node defined for purchase`);
        await prisma.purchase.update({
          data: { txHash: txHash1 },
          where: { id: newRecord.id }
        });

        accountToRedeemFrom = buyerData.blockchainAddress;
      }

      this.logger.debug(`claiming certificate (id=${purchase.certificateId}, issuerApiId=${chainCertData.id}) from blockchainAddress=${accountToRedeemFrom}`);
      const { txHash: txHashClaiming } = await this.issuerService.claimCertificate({
        id: chainCertData.id,
        fromAddress: accountToRedeemFrom,
        amount: purchase.recsSold.toString(),
        claimData: {
          'beneficiary': '',
          'location': '',
          'countryCode': '',
          'periodStartDate': '',
          'periodEndDate': '',
          'purpose': 'Claiming'
        }
      });
      this.logger.debug(`certificate claiming initiated, txHash=${txHashClaiming}`);

      await prisma.purchase.update({
        data: { txHash: txHashClaiming },
        where: { id: newRecord.id }
      });

      const data = await prisma.purchase.findUnique({
        where: { id: newRecord.id },
        include: { filecoinNodes: { select: { filecoinNode: true } } }
      });

      return { ...data, filecoinNodes: data.filecoinNodes.map(n => n.filecoinNode) };
    }, { timeout: 30000 });
  }

  async findAll() {
    const apiBaseUrl = this.configService.get('API_BASE_URL');
    const uiBaseURL = this.configService.get('UI_BASE_URL');
    return (await this.prisma.purchase.findMany({ select: { id: true } })).map((i) => ({
      ...i,
      pageUrl: `${uiBaseURL}/partners/filecoin/purchases/${i.id}`,
      dataUrl: `${apiBaseUrl}/api/partners/filecoin/purchases/${i.id}`,
    }));
  }

  async findOne(id: string) {
    const data = await this.prisma.purchase.findUnique({
      where: {
        id
      },
      include: {
        seller: true,
        buyer: { include: { filecoinNodes: true } },
        filecoinNodes: { include: { filecoinNode: true } },
        certificate: true,
        files: { select: { id: true, fileName: true, mimeType: true } }
      }
    })

    if (!data) {
      return null;
    }

    return {
      ...data,
      pageUrl: `${process.env.UI_BASE_URL}/partners/filecoin/purchases/${data.id}`,
      files: data.files.map(f => ({ ...f, url: `${process.env.FILES_BASE_URL}/${f.id}` })),
      filecoinNodes: data.filecoinNodes.map((r) => r.filecoinNode)
    };
  }

  async update(id: string, updatePurchaseDto: UpdatePurchaseDto) {
    const { filecoinNodes, ...purchase } = updatePurchaseDto;

    return await this.prisma.$transaction(async (prisma) => {
      if (filecoinNodes) {
        const existingRecord = await prisma.purchase.findUnique({ where: { id } });

        if (!existingRecord) {
          throw new NotFoundException();
        }

        await prisma.filecoinNodesOnPurchases.deleteMany({
          where: { purchaseId: id }
        });

        await prisma.filecoinNodesOnPurchases.createMany({
          data: filecoinNodes.map((n) => ({
            buyerId: existingRecord.buyerId,
            purchaseId: id,
            filecoinNodeId: n.id
          }))
        });
      }

      await this.prisma.purchase.update({
        where: { id },
        data: purchase
      });

      const data = await prisma.purchase.findUnique({
        where: { id },
        include: { filecoinNodes: { select: { filecoinNode: true } } }
      });

      return { ...data, filecoinNodes: data.filecoinNodes.map(n => n.filecoinNode) };
    });
  }

  async remove(id: string) {
    await this.prisma.$transaction([
      this.prisma.filecoinNodesOnPurchases.deleteMany({ where: { purchaseId: id } }),
      this.prisma.purchase.delete({ where: { id } })
    ]);

    return { status: "OK" };
  }
}
