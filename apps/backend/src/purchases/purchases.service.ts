import { Injectable, Logger, NotFoundException } from '@nestjs/common';
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

      const { txHash } = await this.issuerService.transferCertificate({
        id: chainCertData.id,
        amount: purchase.recsSold.toString(),
        fromAddress: this.configService.get('ISSUER_CHAIN_ADDRESS'),
        toAddress: buyerData.blockchainAddress
      })

      this.logger.debug(`purchase saved on blockchain, txHash=${txHash}`);

      await prisma.purchase.update({
        data: {txHash},
        where: {id: newRecord.id}
      })

      const data = await prisma.purchase.findUnique({
        where: { id: newRecord.id },
        include: { filecoinNodes: { select: { filecoinNode: true } } }
      });

      return { ...data, filecoinNodes: data.filecoinNodes.map(n => n.filecoinNode) };
    }, {timeout: 10000});
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
