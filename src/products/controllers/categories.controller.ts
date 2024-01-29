import { Controller, Get, Param } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Categories')
@Controller('categories')
export class CategoriesController {
  @Get('/:id/products/:productId')
  getCategory(@Param('id') id: string, @Param('productId') productId: string) {
    return `cat: ${id} \n prod ${productId}`;
  }
}
