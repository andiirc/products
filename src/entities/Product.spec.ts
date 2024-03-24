import {describe, it, expect} from 'vitest';
import { Product, Products, ProductItem } from './Product';

describe('Product', () => {
  it('should create a product object with the correct properties', () => {
    const id = '1098yu-39348plo-hdyehd';
    const name = 'Crema de manos';
    const price = 25000;

    const user: Product = {id, name, price};

    expect(user.id).toBe(id);
    expect(user.name).toBe(name);
    expect(user.price).toBe(price);
  });

  it('Products interface is defined', () => {
    const products: Products = {
      products: [],
    };
  
    expect(products).toBeDefined();
  });

  it('Products has a property "products" which is an array', () => {
    const products: Products = {
      products: [],
    };
  
    expect(Array.isArray(products.products)).toBe(true);
  });

  it('Products interface is defined', () => {
    const product: ProductItem = {
      product: { id: '8273-39348734-hdyehd', name: 'vitamina c', price: 60000 },
    };
  
    expect(product).toBeDefined();
  });

  it('ProductItem has a property "product" which is an object', () => {
    const product: ProductItem = {
      product: { id: '8273-39348734-hdyehd', name: 'vitamina c', price: 60000 },
    };
  
    expect(typeof product.product).toBe('object');
  });
  
  it('should array products with the correct properties', () => { 
    const products: Product[] =[
      { id: '786d7ju-837jd83k-klo09', name: 'Chocolatina', price: 5000 },
      { id: 'mkol287-09ihy19a-0p0iu', name: 'Jabon de baño', price: 3000 }
    ]

    expect(products[0].id).toBe('786d7ju-837jd83k-klo09');
    expect(products[0].name).toBe('Chocolatina');
    expect(products[0].price).toBe(5000);

    expect(products[1].id).toBe('mkol287-09ihy19a-0p0iu');
    expect(products[1].name).toBe('Jabon de baño');
    expect(products[1].price).toBe(3000);
  });

  
  it('should list products array object with the correct properties', () => {
    const data: Products = {
      products: [
        { id: '786d7ju-837jd83k-klo09', name: 'Chocolatina', price: 5000 },
        { id: 'mkol287-09ihy19a-0p0iu', name: 'Jabon de baño', price: 3000 }
      ]
    };

    expect(data.products[0].id).toBe('786d7ju-837jd83k-klo09');
    expect(data.products[0].name).toBe('Chocolatina');
    expect(data.products[0].price).toBe(5000);

    expect(data.products[1].id).toBe('mkol287-09ihy19a-0p0iu');
    expect(data.products[1].name).toBe('Jabon de baño');
    expect(data.products[1].price).toBe(3000);
  });
});