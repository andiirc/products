import { SaveProductUseCase } from "./SaveProductUseCase";
import { GetProductUseCase } from './GetProductUseCase';
import { IProductRepository } from "src/features/products/interfaces/IProductRepository";
import { MockProductRepository } from 'src/features/products/interfaces/MockProductRepository';

describe('SaveProductUseCase', () => {
  let getProductUseCase: GetProductUseCase;
  let saveProductUseCase: SaveProductUseCase;
  let mockUserRepository: IProductRepository;

  beforeEach(() => {
    mockUserRepository = new MockProductRepository();
    getProductUseCase = new GetProductUseCase(mockUserRepository);
    saveProductUseCase = new SaveProductUseCase(mockUserRepository);
  })

  it('should return new product created in list products', () => {
    const product = { name: 'Product 4', price: 100 };
    saveProductUseCase.apply(product);
    const products = getProductUseCase.apply({});
    expect(products).toHaveLength(4);
  });
});
