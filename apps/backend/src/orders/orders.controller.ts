import { Body, Controller, Delete, Get, Param, Patch, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from "@nestjs/swagger";
import { OrderDto } from "./dto/order.dto";

@Controller('orders')
@ApiTags('Orders')
@UsePipes(ValidationPipe)
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @Post()
  @ApiCreatedResponse({ type: OrderDto })
  create(@Body() createOrderDto: CreateOrderDto): Promise<OrderDto> {
    return this.ordersService.create(createOrderDto);
  }

  @Get()
  @ApiOkResponse({ type: [OrderDto] })
  findAll(): Promise<OrderDto[]> {
    return this.ordersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ordersService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateOrderDto: UpdateOrderDto) {
    return this.ordersService.update(+id, updateOrderDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ordersService.remove(+id);
  }
}
