import { Product } from "../../../entities/Product";
import { IProductRepository } from "../interfaces/IProductRepository";

class SaveProductUseCase {

  constructor(private productRepository: IProductRepository) {}

  apply(product: Product): void {
    return this.productRepository.save(product);
  }
}

export { SaveProductUseCase }
