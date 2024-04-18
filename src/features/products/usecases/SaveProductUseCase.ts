import { Product } from "src/entities/Product";
import { IProductRepository } from "src/features/products/interfaces/IProductRepository";

class SaveProductUseCase {
  private readonly repository: IProductRepository;

  constructor(productRepository: IProductRepository) {
    this.repository = productRepository;
  }

  apply(product: Product): void {
    return this.repository.save(product);
  }
}

export { SaveProductUseCase }
