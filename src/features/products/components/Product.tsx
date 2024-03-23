import { FC } from 'react'
import { ProductItem } from '../../../entities/Product'

const ProductComponent:FC<ProductItem> = ({ product }: ProductItem): JSX.Element => {
  return (
    <li>
      <span>id:   </span> <div>{ product.id }</div>
      <span>name: </span> <div>{ product.name }</div>
      <span>price:</span> <div>{ product.price }</div>
    </li>
  )
}

export { ProductComponent }
