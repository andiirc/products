import { Product } from 'src/entities/Product';
import { GetProductUseCase } from 'src/features/products/usecases/GetProductUseCase';
import { SaveProductUseCase } from 'src/features/products/usecases/SaveProductUseCase';
import { ProductDependencyContainer } from 'src/features/products/container/ProductContainer';

const container = ProductDependencyContainer.getInstance();

const ProductUseCaseManager = {
  createProduct: (product: Product): void => {
    const saveProductUseCase = new SaveProductUseCase(container.getProductRepository());
    saveProductUseCase.apply(product);
  },

  getProducts: (): Product[] => {
    const getProductsUseCase = new GetProductUseCase(container.getProductRepository());
    const filters = {};
    return getProductsUseCase.apply(filters);
  }
}

export { ProductUseCaseManager }
