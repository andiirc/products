import { Product } from 'src/entities/Product';
import { v4 as uuidv4 } from 'uuid';

const products: Product[] = [
  { id: uuidv4(), name: 'Product 1', price: 100 },
  { id: uuidv4(), name: 'Product 2', price: 200 },
  { id: uuidv4(), name: 'Product 3', price: 300 },
];

export { products }