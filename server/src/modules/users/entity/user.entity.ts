import { order } from 'src/modules/orders/entity/order.entity';
import {
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  Unique,
} from 'typeorm';

@Entity({
  name: 'users',
})
@Unique(['email'])
export class User {
  @PrimaryGeneratedColumn({
    type: 'bigint',
  })
  user_id: number;

  @Column({
    type: 'varchar',
    length: 255,
    nullable: true,
  })
  name: string;

  @Column({
    type: 'varchar',
    length: 255,
    nullable: false,
  })
  email: string;

  @Column({
    type: 'varchar',
    length: 255,
    nullable: false, //có thể null hay không
  })
  password: string;

  @Column({
    type: 'varchar',
    length: 255,
    default: 'user',
  })
  role: string;

  @OneToMany(() => order, (order) => order.user, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  order: order[];
}
