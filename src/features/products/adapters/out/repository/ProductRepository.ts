
import { Product } from "../../../../../entities/Product";
import { IProductRepository } from "../../../interfaces/IProductRepository";
import { products } from "../../../../../shared/data/products";
import { v4 as uuidv4 } from 'uuid';

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
    const id = uuidv4();
    products.push({...product, id});
  }
}

export { ProductRepository }
