
import { FC, useEffect, useState } from 'react'
import { ListProducts } from 'src/features/products/components/ListProducts'
import { TextField, Button, Box, Container, Typography } from '@mui/material';
import { Product } from 'src/entities/Product';
import { ProductUseCaseManager } from 'src/features/products/usecases/ProductUseCasesManager';

const HomePage:FC = (): JSX.Element => {
  const [product, setProduct] = useState<Product>({name: '', price: 0});
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    handleLoadProducts();
  },[products]);

  const handleLoadProducts = () => {
    const listProducts = ProductUseCaseManager.getProducts();
    setProducts(listProducts);
  }

  const handleChange = (key: string, value: any) => {
    setProduct({ ...product, [key]: value.target.value });
  };

  const handleAddProduct = (event: any) => {
    event.preventDefault();
    ProductUseCaseManager.saveProduct(product);
    setProducts([...products, product]);
    setProduct({name: '', price: 0});
  }

  const isFormValid = product.name.trim() !== '' && product.price > 0;

  return (
    <Container maxWidth="sm">
      <Box sx={{  display: 'flex', flexDirection: 'column', width: '100%'}}>
        <Typography variant="h5" component="h1" sx={{ mb: 1, marginTop: '16px' }}>
          Crear Productos
        </Typography>
        <form onSubmit={handleAddProduct}>
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <TextField
              label="Nombre"
              variant="outlined"
              value={product.name}
              onChange={(text) => handleChange('name', text)}
              sx={{ marginBottom: '16px' }}
            />
          </Box>
          <Box>
            <TextField
              label="Precio"
              variant="outlined"
              value={product.price}
              onChange={(text) => handleChange('price', text)}
              sx={{ width: '100%', marginBottom: '16px' }}
            />
          </Box>
          <Box>
            <Button 
              type="submit" variant="contained" 
              color="primary" sx={{ width: '100%', marginBottom: '16px' }} 
              disabled={!isFormValid} >
              Crear
            </Button>
          </Box>
        </form>
        <ListProducts products={products} />
      </Box>
    </Container>
  );
}

export { HomePage }
