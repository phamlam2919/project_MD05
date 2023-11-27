import { Product } from 'src/modules/products/entity/product.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
// import { tagProduct } from './tagProduct.entity';

@Entity({
  name: 'tag',
})
export class tag {
  @PrimaryGeneratedColumn({
    type: 'bigint',
  })
  tag_id: number;

  @Column({
    length: 255,
    nullable: true,
  })
  length: string;

  @Column({
    length: 255,
    nullable: true,
  })
  width: string;

  @Column({
    length: 255,
    nullable: true,
  })
  height: string;

  @ManyToOne(() => Product, (product) => product.tag, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn({
    name: '_id',
  })
  products: Product;
}
