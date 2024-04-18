import { Product } from "src/entities/Product";
import { IProductRepository } from "src/features/products/interfaces/IProductRepository";

class GetProductUseCase {
  private readonly repository: IProductRepository;

  constructor(productRepository: IProductRepository) {
    this.repository = productRepository;
  }

  apply(filters: {name?: string; price?: number}): Product[] {
   return this.repository.get(filters);
  }
}

export { GetProductUseCase }
