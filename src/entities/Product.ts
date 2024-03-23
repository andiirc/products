export interface Product {
  id?: string;
  name: string;
  price: number;
}

export interface ProductItem {
  product: Product;
}

export interface Products {
  products: Product[];
}