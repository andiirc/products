import { ProductUseCases } from './ProductUseCases';
import { Product } from 'src/entities/Product';
import { SaveProductUseCase } from './SaveProductUseCase';
import { GetProductUseCase } from './GetProductUseCase';
import { ProductRepository } from 'src/features/products/repository/ProductRepository';

describe('ProductUseCases', () => {
  let repository: ProductRepository;

  beforeEach(() => {
    repository = new ProductRepository();
  });

  it('should create a product with correct parameters', () => {
    const product: Product = { name: 'Product 1', price: 10000 };
    const saveProductUseCaseMock = vi.fn();
    vi.spyOn(SaveProductUseCase.prototype, 'apply').mockImplementation(saveProductUseCaseMock);
    ProductUseCases.createProduct(product);
    expect(saveProductUseCaseMock).toHaveBeenCalledWith(product);
  });

  it('should get a list of products', () => {
    const getProductsUseCaseMock = vi.fn();
    vi.spyOn(GetProductUseCase.prototype, 'apply').mockImplementation(getProductsUseCaseMock);
    ProductUseCases.getProducts();
    expect(getProductsUseCaseMock).toHaveBeenCalled();
  });
});

export { ProductUseCases }
