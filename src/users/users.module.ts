import { Module } from '@nestjs/common';
import { CustomersService } from './services/customers.service';
import { UsersService } from './services/users.service';
import { UsersController } from './controllers/users.controller';
import { CustomerController } from './controllers/customers.controller';
import { ProductsModule } from 'src/products/products.module';

@Module({
  imports: [ProductsModule],
  controllers: [UsersController, CustomerController],
  providers: [UsersService, CustomersService],
})
export class UsersModule {}
