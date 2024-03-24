
import { FC, useEffect, useState } from 'react'
import { ListProducts } from 'src/features/products/components/ListProducts'
import { ProductRepository } from 'src/features/products/adapters/out/repository/ProductRepository';
import { GetProductUseCase } from 'src/features/products/usecases/GetProductUseCase';
import { SaveProductUseCase } from 'src/features/products/usecases/SaveProductUseCase';
import { Product } from 'src/entities/Product';

const HomePage:FC = (): JSX.Element => {
  const [product, setProduct] = useState<Product>({name: '', price: 0});
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    handleLoadProducts();
  },[products]);

  const handleLoadProducts = () => {
    const productsReposiroty = new ProductRepository();
    const getProductsUseCase = new GetProductUseCase(productsReposiroty);
    const filters = {};
    const listProducts = getProductsUseCase.apply(filters);
    setProducts(listProducts);
  }

  const handleChange = (key: string, value: any) => {
    setProduct({ ...product, [key]: value.target.value });
  };

  const handleAddProduct = (product: Product) => {  
    const productsReposiroty = new ProductRepository();
    const saveProductUseCase = new SaveProductUseCase(productsReposiroty);
    saveProductUseCase.apply(product);
    setProducts([...products, product]);
    setProduct({name: '', price: 0});
  }

  return (
    <div>
      <p> Crear Productos</p>
        <input type="text" name="name" value={product.name} onChange={(text) => handleChange('name', text)}/>
        <input type="number" name="price" value={product.price} onChange={(text) => handleChange('price', text)}/>
        <button onClick={() => handleAddProduct(product)}>Crear</button>
        <ListProducts products={products} />
    </div>
  );
}

export { HomePage }
