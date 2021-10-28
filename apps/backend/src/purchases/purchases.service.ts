import { BadRequestException, Injectable, Logger, NotFoundException } from '@nestjs/common';
import { CreatePurchaseDto } from './dto/create-purchase.dto';
import { UpdatePurchaseDto } from './dto/update-purchase.dto';
import { PrismaService } from '../prisma/prisma.service';
import { ConfigService } from '@nestjs/config';
import { IssuerService } from '../issuer/issuer.service';
import { CertificatesService } from '../certificates/certificates.service';
import { BuyersService } from '../buyers/buyers.service';
import { pick } from 'lodash';

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

    if (filecoinNodes && filecoinNodes.length > 1) {
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

      if (filecoinNodes && filecoinNodes[0]) {
        const filecoinNode = filecoinNodes[0];

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

  async getChainEvents(id: string) {
    const purchase = await this.prisma.purchase.findUnique({ where: { id } });
    const certificate = await this.prisma.certificate.findUnique({ where: { id: purchase.certificateId } });
    const issuerApiCerData = await this.issuerService.getCertificateByTransactionHash(certificate.txHash);

    const events = (await this.issuerService.getCertificateEvents(issuerApiCerData.id))
      .filter((event) => event.name === 'TransferSingle')
      .map(e => ({
        ...e,
        date: new Date(e.timestamp * 1000),
        recs: e.value ? BigInt(e.value.hex).toString() : undefined
      }))
      .map((event) => pick(event, [
        'name',
        'timestamp',
        'transactionHash',
        'blockHash',
        'from',
        'to',
        'recs'
      ]));

    const lastTransactionHash = purchase.txHash;

    const indexOfClaimTransaction = events.findIndex((event) => {
      return event.to === '0x0000000000000000000000000000000000000000' && event.transactionHash === lastTransactionHash;
    });

    const purchaseEvents = [];

    if (indexOfClaimTransaction > -1) {
      events[indexOfClaimTransaction].name = 'Certificate Redemption';
      purchaseEvents.unshift(events[indexOfClaimTransaction]);
    }

    let cursor = indexOfClaimTransaction - 1;

    while (cursor > -1) {
      const currentEvent = events[cursor];
      const lastMatchedEvent = purchaseEvents[0];

      if (currentEvent.recs === events[indexOfClaimTransaction].recs && currentEvent.to === lastMatchedEvent.from) {
        currentEvent.name = 'Transfer of Ownership';
        purchaseEvents.unshift(currentEvent);
      }

      cursor--;
    }

    events[1].name = 'Transfer of Ownership';
    purchaseEvents.unshift(events[1]); // transfer to escrow
    events[0].name = 'On Chain Registration';
    purchaseEvents.unshift(events[0]); // cert. issuance

    return purchaseEvents;
  }
}

export const purchaseEventsSchema = {
  type: 'array',
  items: {
    type: 'object',
    properties: {
      name: {
        type: 'string',
        example: 'On Chain Registration'
      },
      timestamp: {
        type: 'number',
        example: 1635372100
      },
      transactionHash: {
        type: 'string',
        example: '0x34fc277d9748647b3f2de3e38941bb859d77caed62349ab4e12e3d3853681e77'
      },
      blockHash: {
        type: 'string',
        example: '0x75a45ef1232f1210586477d57d5aa666261911b3d4e5fc0a46fbcf23ec28a694'
      },
      from: {
        type: 'string',
        example: '0x0000000000000000000000000000000000000000'
      },
      to: {
        type: 'string',
        example: '0xd46aC0Bc23dB5e8AfDAAB9Ad35E9A3bA05E092E8'
      },
      recs: {
        type: 'string',
        example: '10000'
      }
    },
    required: ['name']
  }
};
