import { ProductRepository } from "src/features/products/repository/ProductRepository";

interface IProductContainer {
  getProductRepository(): ProductRepository;
}

class ProductDependencyContainer implements IProductContainer {
  private static instance: ProductDependencyContainer;
  private readonly repository: ProductRepository;

  private constructor() {
    this.repository = new ProductRepository();
  }

  public static getInstance(): ProductDependencyContainer {
    if (!ProductDependencyContainer.instance) {
        ProductDependencyContainer.instance = new ProductDependencyContainer();
    }
    return ProductDependencyContainer.instance;
  }

  getProductRepository(): ProductRepository {
    return this.repository;
  }
}

export { ProductDependencyContainer }
