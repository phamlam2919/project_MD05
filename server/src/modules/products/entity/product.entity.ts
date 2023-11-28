import {
  Column,
  Double,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { CateGory } from '../../category/entity/category.entity';
import { ImageShow } from 'src/modules/imageshow/entity/imageshow.entity';
// import { tagProduct } from 'src/modules/tag/entity/tagProduct.entity';
import { orderdetail } from 'src/modules/orders/entity/orderDetail.entity';
import { tag } from 'src/modules/tag/entity/tag.entity';

@Entity({
  name: 'products',
})
export class Product {
  @PrimaryGeneratedColumn({
    type: 'bigint',
  })
  _id: number;

  @Column({
    length: 255,
    nullable: true,
    // unique: true,
  })
  name: string;

  @Column({
    type: 'int',
    nullable: true,
  })
  number: string;

  @Column({
    type: 'bigint',
    nullable: true,
  })
  price: string;

  @Column({
    type: 'double',
    nullable: true,
  })
  sale: string;

  @ManyToOne(() => CateGory, (category) => category.products, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({
    name: 'category_id',
  })
  category: CateGory;

  @OneToMany(() => ImageShow, (image) => image.products, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  image_shows: ImageShow[];

  @OneToMany(() => tag, (image) => image.products, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  tag: tag[];

  @OneToMany(() => orderdetail, (orderdetail) => orderdetail.product, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  orderdetail: orderdetail[];
}
