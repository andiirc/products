import { ProductRepository } from "./ProductRepository";
import { Product } from "src/entities/Product";

describe('ProductRepository', () => {
  const productRepository = new ProductRepository();

  it('should return all products', () => {
    const products = productRepository.get({});
    expect(products).toHaveLength(3);
  });

  it('should return products by name', () => {
    const products = productRepository.get({name: 'Product 1'});
    expect(products).toHaveLength(1);
  });

  it('should return no products by price ', () => {
    const products = productRepository.get({price: 20});
    expect(products).toHaveLength(0);
  });

  it('should return products by price ', () => {
    const products = productRepository.get({price: 300});
    expect(products).toHaveLength(1);
  });

  it('should save product', () => {
    const product: Product = {
      name: 'Product 4',
      price: 40
    };
    productRepository.save(product);
    const products = productRepository.get({});
    expect(products).toHaveLength(4);
  });
});

