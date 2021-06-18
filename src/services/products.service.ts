import { Injectable } from '@nestjs/common';
import { Product } from '../entities/product.entity';
@Injectable()
export class ProductsService {
  private counterId = 1;
  private products: Product[] = [
    {
      id: 1,
      name: 'product 1',
      description: 'producto description',
      price: 12122,
      stock: 123123,
      imageUrl: 'asad.png',
    },
  ];
  findAll() {
    return this.products;
  }
  findOne(id: number) {
    return this.products.find((item) => item.id === id);
  }
  create(payload: any) {
    this.counterId++;
    const newProduct = {
      id: this.counterId,
      ...payload,
    };
    this.products.push(newProduct);
    return newProduct;
  }
  update(id: number, payload: any) {
    const idp = this.products.findIndex((item) => item.id === id);
    if (idp) {
      this.products[idp] = {
        id: id,
        ...payload,
      };
      return { message: 'product updated' };
    } else {
      return { message: 'product not found' };
    }
  }
}
