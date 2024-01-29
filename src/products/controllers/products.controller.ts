import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Put,
  Delete,
  HttpStatus,
  HttpCode,
  // ParseIntPipe,
} from '@nestjs/common';

import { ProductsService } from '../services/products.service';
import { CreateProductDto, UpdateProductDto } from '../dtos/product.dto';
import { ParseIntPipe } from 'src/common/parse-int.pipe';
import { ApiTags, ApiOperation } from '@nestjs/swagger';

@ApiTags('Products')
@Controller('products')
export class ProductsController {
  constructor(private productsService: ProductsService) {}

  @Get('/')
  @ApiOperation({ summary: 'List of products' })
  getProducts() {
    return this.productsService.findAll();
  }

  @Get('/:productId')
  @HttpCode(HttpStatus.ACCEPTED)
  // getProduct(@Param('productId', ParseIntPipe) productId: number) {
  getProduct(@Param('productId', ParseIntPipe) productId: number) {
    return this.productsService.findOne(productId);
  }

  @Post('/')
  @HttpCode(HttpStatus.CREATED)
  create(@Body('') payload: CreateProductDto) {
    return this.productsService.create(payload);
  }

  @Put(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body('') payload: UpdateProductDto,
  ) {
    return this.productsService.update(id, payload);
  }

  @Delete(':id')
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.productsService.delete(id);
  }
}
