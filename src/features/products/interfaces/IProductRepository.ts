import { Product } from "src/entities/Product";

export interface IProductRepository {
  get(filters: {name?: string; price?: number}): Product[];
  save(product: Product): void;
}
