
import { FC, useEffect, useState } from 'react'
import { ListProducts } from 'src/features/products/components/ListProducts'
import { TextField, Button, Box, Container, Typography } from '@mui/material';
import { useProduct } from 'src/features/products/hook/useProduct';

const HomePage:FC = (): JSX.Element => {

  const { 
    product,
    products,
    handleLoadProducts,
    handleChange,
    handleAddProduct,
    isFormValid
  } = useProduct();

  useEffect(() => {
    handleLoadProducts();
  },[products]);

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
