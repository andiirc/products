import { ProductUseCaseManager } from './ProductUseCasesManager';
import { Product } from 'src/entities/Product';
import { SaveProductUseCase } from './SaveProductUseCase';
import { GetProductUseCase } from './GetProductUseCase';

describe('ProductUseCasesManager', () => {
  it('should create a product with correct parameters', () => {
    const product: Product = { name: 'Product 1', price: 10000 };
    const saveProductUseCaseMock = vi.fn();
    vi.spyOn(SaveProductUseCase.prototype, 'apply').mockImplementation(saveProductUseCaseMock);
    ProductUseCaseManager.saveProduct(product);
    expect(saveProductUseCaseMock).toHaveBeenCalledWith(product);
  });

  it('should get a list of products', () => {
    const getProductsUseCaseMock = vi.fn();
    vi.spyOn(GetProductUseCase.prototype, 'apply').mockImplementation(getProductsUseCaseMock);
    ProductUseCaseManager.getProducts();
    expect(getProductsUseCaseMock).toHaveBeenCalled();
  });
});
