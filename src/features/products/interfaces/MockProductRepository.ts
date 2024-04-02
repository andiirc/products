import { Product } from "src/entities/Product";
import { IProductRepository } from "./IProductRepository";
import { products } from "src/shared/data/products";
import { v4 as Uid } from 'uuid';

class MockProductRepository implements IProductRepository {
    get(filters: {name?: string; price?: number}): Product[] {
        const {name, price} = filters;
        if (name) {
          return products.filter(product => product.name === name);
        }
        if (price) {
          return products.filter(product => product.price === price);
        }
        return products;
    }
  
    save(product: Product): void {
      const id = Uid();
      products.push({...product, id});
    }
  }
  
  export { MockProductRepository };
