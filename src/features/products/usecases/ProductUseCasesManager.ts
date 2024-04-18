
import { Product } from 'src/entities/Product';
import { GetProductUseCase } from 'src/features/products/usecases/GetProductUseCase';
import { SaveProductUseCase } from 'src/features/products/usecases/SaveProductUseCase';
import { ProductDependencyContainer } from 'src/features/products/dependency/ProductDependencyContainer';
import { ProductRepository } from 'src/features/products/repository/ProductRepository';

class ProductUseCase {
  private  readonly productRepository: ProductRepository;

  constructor(private readonly dependencyContainer: ProductDependencyContainer) {
    this.productRepository = this.dependencyContainer.getProductRepository();
  }

  saveProduct(product: Product): void  {
    const saveProductUseCase = new SaveProductUseCase(this.productRepository);
    saveProductUseCase.apply(product);
  }

  getProducts(): Product[] {
    const getProductsUseCase = new GetProductUseCase(this.productRepository);
    const filters = {};
    return getProductsUseCase.apply(filters);
  }
}
const dependencyContainer: ProductDependencyContainer = ProductDependencyContainer.getInstance();
const ProductUseCaseManager = new ProductUseCase(dependencyContainer);

export { ProductUseCaseManager }
