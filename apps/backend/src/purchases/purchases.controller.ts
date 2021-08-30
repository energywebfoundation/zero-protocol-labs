import {
  Body,
  ClassSerializerInterceptor,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UseGuards,
  UseInterceptors
} from '@nestjs/common';
import { PurchasesService } from './purchases.service';
import { CreatePurchaseDto } from './dto/create-purchase.dto';
import { UpdatePurchaseDto } from './dto/update-purchase.dto';
import { ApiOkResponse, ApiSecurity, ApiTags } from "@nestjs/swagger";
import { AuthGuard } from "@nestjs/passport";
import { PurchaseDto } from "./dto/purchase.dto";

@Controller('/partners/filecoin/purchases')
@ApiTags('Filecoin purchases')
@UseInterceptors(ClassSerializerInterceptor)
export class PurchasesController {
  constructor(private readonly purchasesService: PurchasesService) {}

  @Post()
  @UseGuards(AuthGuard('api-key'))
  @ApiSecurity('api-key', ['api-key'])
  create(@Body() createPurchaseDto: CreatePurchaseDto) {
    return this.purchasesService.create(createPurchaseDto);
  }

  @Get()
  @UseGuards(AuthGuard('api-key'))
  @ApiSecurity('api-key', ['api-key'])
  findAll() {
    return this.purchasesService.findAll();
  }

  @Get(':id')
  @ApiOkResponse({ type: PurchaseDto })
  findOne(@Param('id') id: string) {
    return new PurchaseDto({
      "id": "6ffdd03c-8110-46a9-beb3-c91ddd2e159d",
      "seller": {
        "name": "Monsoon Carbon",
        "address": "Mt Arrakis 42, Dune plains, \nAix en Provence, 12345, France",
        "contactPerson": "Paul Atreides"
      },
      "buyer": {
        "filecoinMinerId": "f0112027",
        "name": "-"
      },
      "files": [
        {
          "id": "3e0367d7-0472-4840-bc2d-5e90d84ff5f4",
          "fileName": "I-REC_RedemptionCertificate_20210802-1234-ABD...EFG.pdf",
          "url": "https://localhost:3333/api/files/3e0367d7-0472-4840-bc2d-5e90d84ff5f4"
        }
      ],
      recsTransactions: [
        { year: 2020, amount: 2 },
        { year: 2021, amount: 1 }
      ],
      "certificate": {
        sellerId: "118007",
        generatorName: "Solar 1 - Non Bua Lampon",
        generatorId: "NA",
        namePlateCapacity: "59.595",
        namePlateCapacityUnit: "MW",
        fuelType: "Solar",
        recsSold: 3,
        generationStart: new Date("2020-11-01T00:00:00.000Z"),
        generationEnd: new Date("2021-06-01T23:59:59.999Z")
      }
    });

    // return this.purchasesService.findOne(+id);
  }

  @Put(':id')
  @UseGuards(AuthGuard('api-key'))
  @ApiSecurity('api-key', ['api-key'])
  update(@Param('id') id: string, @Body() updatePurchaseDto: UpdatePurchaseDto) {
    return this.purchasesService.update(+id, updatePurchaseDto);
  }

  @Delete(':id')
  @UseGuards(AuthGuard('api-key'))
  @ApiSecurity('api-key', ['api-key'])
  remove(@Param('id') id: string) {
    return this.purchasesService.remove(+id);
  }
}
