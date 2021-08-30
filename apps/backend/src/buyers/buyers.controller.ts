import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseInterceptors,
  ClassSerializerInterceptor, UseGuards
} from '@nestjs/common';
import { BuyersService } from './buyers.service';
import { CreateBuyerDto } from './dto/create-buyer.dto';
import { UpdateBuyerDto } from './dto/update-buyer.dto';
import { ApiOkResponse, ApiSecurity, ApiTags } from "@nestjs/swagger";
import { BuyerDto } from "./dto/buyer.dto";
import { AuthGuard } from "@nestjs/passport";

@Controller('/partners/filecoin/buyers')
@ApiTags('Filecoin buyers')
@UseInterceptors(ClassSerializerInterceptor)
export class BuyersController {
  constructor(private readonly buyersService: BuyersService) {}

  @Post()
  @UseGuards(AuthGuard('api-key'))
  @ApiSecurity('api-key', ['api-key'])
  create(@Body() createBuyerDto: CreateBuyerDto) {
    return this.buyersService.create(createBuyerDto);
  }

  @Get()
  @UseGuards(AuthGuard('api-key'))
  @ApiSecurity('api-key', ['api-key'])
  findAll() {
    return this.buyersService.findAll();
  }

  @Get(':id')
  @ApiOkResponse({ type: BuyerDto })
  findOne(@Param('id') id: string) {
    return this.buyersService.findOne(+id);
  }

  @Patch(':id')
  @UseGuards(AuthGuard('api-key'))
  @ApiSecurity('api-key', ['api-key'])
  update(@Param('id') id: string, @Body() updateBuyerDto: UpdateBuyerDto) {
    return this.buyersService.update(+id, updateBuyerDto);
  }

  @Delete(':id')
  @UseGuards(AuthGuard('api-key'))
  @ApiSecurity('api-key', ['api-key'])
  remove(@Param('id') id: string) {
    return this.buyersService.remove(+id);
  }
}
