import { IsNotEmpty, IsEmpty, MaxLength } from 'class-validator';

export class CreateProductDto {
  @IsEmpty()
  id?: number;

  @IsNotEmpty()
  @MaxLength(10)
  name: string;
  number: number;
  price: number;
  sale: string;
}
