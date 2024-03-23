import { FC } from 'react'
import { Products } from '../../../entities/Product'
import { ProductComponent } from './Product'

const ListProducts:FC<Products> = ({products}:Products): JSX.Element => {

  const productsList = products.map((product, index) => (
    <ProductComponent key={index} product={product}/>
  ))

  return (
    <>
      <p>Products List</p>
      <ul>{productsList}</ul>
    </>
  )
}

export { ListProducts }
