import { Module } from '@nestjs/common';
import { ProductsController } from './controllers/products.controller';
import { CategoriesController } from './controllers/categories.controller';
import { ProductsService } from './services/products.service';
import { CategoryService } from 'src/products/services/category.service';

@Module({
  imports: [],
  controllers: [ProductsController, CategoriesController],
  providers: [ProductsService, CategoryService],
  exports: [ProductsService],
})
export class ProductsModule {}
