import { Product } from 'src/entities/Product';
import { GetProductUseCase } from 'src/features/products/usecases/GetProductUseCase';
import { SaveProductUseCase } from 'src/features/products/usecases/SaveProductUseCase';
import { ProductRepository } from 'src/features/products/repository/ProductRepository';

const ProductUseCases = {
  createProduct: (product: Product): void => {
    const productsRepository = new ProductRepository();
    const saveProductUseCase = new SaveProductUseCase(productsRepository);
    saveProductUseCase.apply(product);
  },

  getProducts: (): Product[] => {
    const productsRepository = new ProductRepository();
    const getProductsUseCase = new GetProductUseCase(productsRepository);
    const filters = {};
    return getProductsUseCase.apply(filters);
  }
}

export { ProductUseCases }
