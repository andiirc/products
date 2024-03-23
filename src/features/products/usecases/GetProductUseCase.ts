import { Product } from "../../../entities/Product";
import { IProductRepository } from "../interfaces/IProductRepository";

class GetProductUseCase {

  constructor(private productRepository: IProductRepository) {}

  apply(filters: {name?: string; price?: number}): Product[] {
   return this.productRepository.get(filters);
  }
}

export { GetProductUseCase }
