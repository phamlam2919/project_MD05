// import { Collection } from '../../collections/entity/collection.entity';
import { Product } from '../../products/entity/product.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity({
  name: 'categories',
})
export class CateGory {
  @PrimaryGeneratedColumn()
  category_id: number;

  @Column({
    length: 255,
    nullable: false,
  })
  description: string;

  @Column({
    length: 255,
    nullable: false,
  })
  name: string;

  @Column({
    length: 255,
  })
  banner: string;

  //xác định moois quan hệ với product

  @OneToMany(() => Product, (product) => product.category, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  products: Product[];
}
