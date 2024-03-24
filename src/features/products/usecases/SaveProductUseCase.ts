import { Product } from "src/entities/Product";
import { IProductRepository } from "src/features/products/interfaces/IProductRepository";

class SaveProductUseCase {

  constructor(private productRepository: IProductRepository) {}

  apply(product: Product): void {
    return this.productRepository.save(product);
  }
}

export { SaveProductUseCase }
