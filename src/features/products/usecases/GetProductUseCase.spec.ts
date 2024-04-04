import { GetProductUseCase } from "./GetProductUseCase";
import { IProductRepository } from "src/features/products/interfaces/IProductRepository";
import { MockProductRepository } from 'src/features/products/interfaces/MockProductRepository';

describe('GetProductUseCase', () => {
  let getProductUseCase: GetProductUseCase;
  let mockUserRepository: IProductRepository;

  beforeEach(() => {
    mockUserRepository = new MockProductRepository();
    getProductUseCase = new GetProductUseCase(mockUserRepository);
  })

  it('should return all products', () => {
    const products = getProductUseCase.apply({});
    expect(products).toHaveLength(3);
  });

  it('should return products filtered by name', () => {
    const products = getProductUseCase.apply({ name: 'Product 1' });
    expect(products).toHaveLength(1);

    expect(products[0].name).toBe('Product 1');
    expect(products[0].price).toBe(100);
  });

  it('should return products filtered by price', () => {
    const products = getProductUseCase.apply({ price: 300 });
  
    expect(products).toHaveLength(1);
    expect(products[0].name).toBe('Product 3');
    expect(products[0].price).toBe(300);
  });
});
