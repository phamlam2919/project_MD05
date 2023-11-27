import { Product } from 'src/modules/products/entity/product.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
// import { ProductVariant } from '../../products/entity/product_variant.entity';

@Entity('image_show')
export class ImageShow {
  @PrimaryGeneratedColumn({
    type: 'bigint',
  })
  image_id: number;

  @Column({
    length: 255,
  })
  image: string;

  @ManyToOne(() => Product, (product) => product.image_shows, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({
    name: '_id',
  })
  products: Product;
}
