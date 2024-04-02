import { Product } from 'src/entities/Product';
import { v4 as Uid } from 'uuid';

const idFirst = Uid();
const idSecond = Uid();
const idThird = Uid();

const products: Product[] = [
  { id: idFirst, name: 'Product 1', price: 100 },
  { id: idSecond, name: 'Product 2', price: 200 },
  { id: idThird, name: 'Product 3', price: 300 },
];

export { products }
