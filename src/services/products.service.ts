import { Injectable, NotFoundException } from '@nestjs/common';
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
    const product = this.products.find((item) => item.id === id);
    if (!product) {
      throw new NotFoundException(`not found ${id}`);
    } else {
      return product;
    }
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
  //Corregir
  update(id: number, payload: any) {
    const product = this.findOne(id);
    if (product) {
      const index = this.products.findIndex((item) => item.id === id);
      this.products[index] = {
        ...product,
        ...payload,
      };
      return this.products[index];
    }
    return null;
  }
  //corregir
  delete(id: number) {
    const idDel = this.products.findIndex((item) => item.id === id);
    if (idDel === -1) {
      this.products.splice(id, 1);
      return { message: 'product updated' };
    } else {
      return { message: 'product not found' };
    }
  }
}
