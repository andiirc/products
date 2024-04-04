import { IProductRepository } from './IProductRepository';
import { MockProductRepository } from './MockProductRepository';
import { Product } from "src/entities/Product";

describe('IProductRepository', () => { 
  let productRepository: IProductRepository;

  beforeEach(() => {
    productRepository = new MockProductRepository();
  });

  it('should save a product when calling save', () => {
    const product: Product = { name: 'Product 4', price: 400 };
    productRepository.save(product);

    const products = productRepository.get({ name : 'Product 4' });
    expect(products).toHaveLength(1);
    expect(products[0].name).toBe('Product 4');
    expect(products[0].price).toBe(400);
  })

  it('should return a product when calling get filter for name', () => {
    const product = productRepository.get({name: 'Product 1'});
    expect(product[0].name).toBe('Product 1');
    expect(product[0].price).toBe(100);
  })

  it('should return a product when calling get filter for price', () => {
    const product = productRepository.get({price: 200});
    expect(product[0].name).toBe('Product 2');
    expect(product[0].price).toBe(200);
  })

  it('should return all products when calling get', () => {
    const products = productRepository.get({});
    expect(products).toHaveLength(4);
    expect(products[0].name).toBe('Product 1');
    expect(products[0].price).toBe(100);
    expect(products[1].name).toBe('Product 2');
    expect(products[1].price).toBe(200);
    expect(products[2].name).toBe('Product 3');
    expect(products[2].price).toBe(300);
    expect(products[3].name).toBe('Product 4');
    expect(products[3].price).toBe(400);
  })
})
