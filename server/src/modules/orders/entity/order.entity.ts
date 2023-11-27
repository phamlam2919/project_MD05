import { User } from 'src/modules/users/entity/user.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { orderdetail } from './orderDetail.entity';

@Entity({
  name: 'order',
})
export class order {
  @PrimaryGeneratedColumn({
    type: 'bigint',
  })
  order_id: number;

  @Column({
    type: 'datetime',
    nullable: true,
  })
  created_at: string;

  @Column({
    type: 'varchar',
    length: 255,
    nullable: true,
  })
  name: string;
  @Column({
    type: 'varchar',
    length: 50,
    nullable: true,
  })
  status: string;

  @Column({
    type: 'varchar',
    length: 100,
    nullable: true,
  })
  email: string;

  @Column({
    type: 'varchar',
    length: 100,
    nullable: true,
  })
  phone: string;

  @Column({
    type: 'varchar',
    length: 100,
    nullable: true,
  })
  address: string;

  @Column({
    type: 'varchar',
    length: 100,
    nullable: true,
  })
  province: string;

  @Column({
    type: 'varchar',
    length: 100,
    nullable: true,
  })
  district: string;

  @Column({
    type: 'varchar',
    length: 100,
    nullable: true,
  })
  ward: string;

  @ManyToOne(() => User, (user) => user.order, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({
    name: 'user_id',
  })
  user: User;

  @OneToMany(() => orderdetail, (orderdetail) => orderdetail.order, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  orderdetail: orderdetail[];
}
