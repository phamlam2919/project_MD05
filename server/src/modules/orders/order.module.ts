import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrderController } from './order.controller';
import { OrderService } from './order.service';
import { order } from './entity/order.entity';
import { orderdetail } from './entity/orderDetail.entity';
import { User } from 'src/modules/users/entity/user.entity';
import { UsersService } from '../users/users.service';
import { UsersModule } from '../users/users.module';

@Module({
  imports: [TypeOrmModule.forFeature([order, orderdetail, User]), UsersModule],
  controllers: [OrderController],
  providers: [OrderService],
})
export class OrderModule {}
