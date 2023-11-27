import { CreateOrderDto } from './DTO/createOrder.dto';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { order } from './entity/order.entity';
import { UsersService } from '../users/users.service';

@Injectable()
export class OrderService {
  constructor(
    @InjectRepository(order)
    private readonly orderRepository: Repository<order>,
    private readonly usersService: UsersService,
  ) {}

  async createOrder(createOrderDto: CreateOrderDto): Promise<order> {
    try {
      createOrderDto.created_at = new Date().toISOString();
      createOrderDto.status = 'pending';
      const newOrder = this.orderRepository.create(createOrderDto);
      const user = await this.usersService.getById(createOrderDto.user_id);
      const order = { ...newOrder, user };
      const result = await this.orderRepository.save(order);
      return result;
    } catch (error) {
      console.log(error);
    }
  }

  async getAllOrders(): Promise<order[]> {
    return this.orderRepository.find();
  }
}
