import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
  HttpCode,
  HttpStatus,
  Res,
} from '@nestjs/common';

import { Response } from 'express';
import { ProductsService } from '../services/products.service';
@Controller('products')
export class ProductsController {
  constructor(private productService: ProductsService) {}
  @Get()
  getProducts(
    @Query('limit') limit = 100,
    @Query('offset') offset = 0,
    @Query('brand') brand: string,
  ) {
    // return {
    //   message: `product limit =>${limit} offset =>${offset} brand=>${brand}`,
    // };
    return this.productService.findAll();
  }
  @Get('/filter')
  getProductfilter() {
    return `product get filter`;
  }
  @Get('/:productId')
  @HttpCode(HttpStatus.ACCEPTED)
  getProduct(@Param('productId') productId: string) {
    // response.status(200).send({
    //   message: `product ${productId}`,
    // });
    return this.productService.findOne(+productId);
  }
  @Post()
  create(@Body() payload: any) {
    //return { message: 'action create', payload };
    return this.productService.create(payload);
  }
  @Put(':id')
  update(@Param('id') id: number, @Body() payload: any) {
    // return {
    //   id,
    //   payload,
    // };
    return this.productService.update(id, payload);
  }
  @Delete(':id')
  delete(@Param('id') id: number) {
    // return {
    //   id,
    // };
    return this.productService.delete(id);
  }
}
