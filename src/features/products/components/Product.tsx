import { FC } from 'react'
import { ProductItem } from 'src/entities/Product'
import { Card, CardContent, Typography } from '@mui/material';

const ProductComponent:FC<ProductItem> = ({ product }: ProductItem): JSX.Element => {
  return (
    <Card variant="outlined">
      <CardContent>
        <Typography variant="h6" component="div">
          id: {product.id}
        </Typography>
        <Typography variant="body2">
          name: {product.name}
        </Typography>
        <Typography variant="body2">
         price: {product.price}
        </Typography>
      </CardContent>
    </Card>
  )
}

export { ProductComponent }
