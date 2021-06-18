import {
  IsNotEmpty,
  IsNumber,
  IsString,
  IsUrl,
  IsPositive,
} from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';
export class CreateProductdto {
  @IsString()
  @IsNotEmpty()
  readonly name: string;

  @IsNumber()
  @IsPositive()
  readonly price: number;

  @IsString()
  @IsNotEmpty()
  readonly description: string;

  @IsNumber()
  @IsNotEmpty()
  @IsPositive()
  readonly stock: number;

  @IsUrl()
  readonly image: string;
}

export class UpdateProductdto extends PartialType(CreateProductdto) {}
