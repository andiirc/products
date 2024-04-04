
import { Product } from "src/entities/Product";
import { IProductRepository } from "src/features/products/interfaces/IProductRepository";
import { products } from "src/shared/data/products";
import { v4 as Uid } from 'uuid';

class ProductRepository implements IProductRepository {
  get(filters: { name?: string; price?: number }): Product[] {

    if (filters.name) {
      return products.filter(product => product.name === filters.name);
    }

    if (filters.price) {
        return products.filter(product => product.price === filters.price);
    }

      return products;
  }
  save(product: Product): void {
    const id = Uid();
    products.push({...product, id});
  }
}

export { ProductRepository }
