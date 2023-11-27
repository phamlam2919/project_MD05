import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { registerAs } from '@nestjs/config';
import { User } from '../modules/users/entity/user.entity';
import { CateGory } from '../modules/category/entity/category.entity';
import { Product } from '../modules/products/entity/product.entity';
import { ImageShow } from '../modules/imageshow/entity/imageshow.entity';
// import { tagProduct } from 'src/modules/tag/entity/tagProduct.entity';
import { tag } from 'src/modules/tag/entity/tag.entity';
import { orderdetail } from 'src/modules/orders/entity/orderDetail.entity';
import { order } from 'src/modules/orders/entity/order.entity';

export default registerAs(
  'orm.config',
  (): TypeOrmModuleOptions => ({
    type: 'mysql',
    host: process.env.DB_HOST || 'localhost',
    port: Number(process.env.DB_PORT) || 3306,
    username: process.env.DB_USERNAME || 'root',
    password: process.env.DB_PASSWORD || '290802',
    database: process.env.DB_NAME_DATABASE || 'projectmd05',
    entities: [User, CateGory, Product, ImageShow, tag, orderdetail, order],
    synchronize: true,
  }),
);
