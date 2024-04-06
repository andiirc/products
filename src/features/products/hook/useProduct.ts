import { useState, useEffect } from 'react';
import { Product } from 'src/entities/Product';
import { ProductUseCaseManager } from 'src/features/products/usecases/ProductUseCasesManager';

const useProduct = () => {
  const [product, setProduct] = useState<Product>({name: '', price: 0});
  const [products, setProducts] = useState<Product[]>([]);
  const { getProducts, createProduct } = ProductUseCaseManager

  useEffect(() => {
    handleLoadProducts();
  },[products]);

  const handleLoadProducts = (): void => {
    const listProducts = getProducts();
    setProducts(listProducts);
  }

  const handleChange = (key: string, value: any): void => {
    setProduct({ ...product, [key]: value.target.value });
  };

  const handleAddProduct = (event: any): void => {
    event.preventDefault();
    createProduct(product);
    setProducts([...products, product]);
    setProduct({name: '', price: 0});
  }

  const isFormValid: boolean = product.name.trim() !== '' && product.price > 0;

  return {
    product,
    products,
    handleChange,
    handleAddProduct,
    isFormValid
  }
}

export { useProduct }
