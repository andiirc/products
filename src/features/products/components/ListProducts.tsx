import { FC } from 'react'
import { Products } from 'src/entities/Product'
import { ProductComponent } from './Product'
import { Typography, List, ListItemText } from '@mui/material';

const ListProducts:FC<Products> = ({products}:Products): JSX.Element => {

  const productsList = products.map((product, index) => (
    <ListItemText key={index}>
      <ProductComponent  product={product}/>
    </ListItemText>
  ))

  return (
    <>
      <Typography variant="h5" component="h1" sx={{ mb: 1 }}>
        Lista de productos
      </Typography>
      <List>{productsList}</List>
    </>
  )
}

export { ListProducts }
