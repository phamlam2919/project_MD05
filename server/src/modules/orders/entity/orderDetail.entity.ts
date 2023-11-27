import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Product } from 'src/modules/products/entity/product.entity';
import { order } from './order.entity';

@Entity({
  name: 'orderdetail',
})
export class orderdetail {
  @PrimaryGeneratedColumn({
    type: 'bigint',
  })
  orderdetail_id: number;

  @Column({
    type: 'int',
    nullable: true,
  })
  number: string;

  @ManyToOne(() => Product, (product) => product.orderdetail, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({
    name: '_id',
  })
  product: Product;

  @ManyToOne(() => order, (order) => order.orderdetail, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({
    name: 'order_id',
  })
  order: order;
}
