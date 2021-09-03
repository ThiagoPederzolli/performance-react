import { memo, useState } from 'react'
import dynamic from 'next/dynamic'
import { AddProductToWishListProps } from './AddProcuctToWishList'

const AddProductToWishList = dynamic<AddProductToWishListProps>(() => {
  return import('./AddProcuctToWishList').then(mod => mod.AddProductToWishList)
})

interface ProductItemProps {
  product: {
    id: number;
    price: number;
    title: string;
    priceFormatted: string;
  }
  onAddToWishList: (id: number) => void;
}

// export const ProductItem = memo(({ product }: ProductItemProps) => {
//   return (
//     <div>
//       {product.title} <strong>{product.price}</strong>
//     </div>
//   )
// })

function ProductItemComponent({ product, onAddToWishList }: ProductItemProps) {
  const [isAddingToWishList, setIsAddingToWishList] = useState(false)

  return (
    <div>
      {product.title} <strong>{product.priceFormatted}</strong>
      <button onClick={() => setIsAddingToWishList(true)}>Adicionar aos favoritos</button>
      { isAddingToWishList && (
        <AddProductToWishList onAddToWishList={() => onAddToWishList(product.id)} onRequestClose={() => setIsAddingToWishList(false)}  />
      )}
    </div>
  )
}

export const ProductItem = memo(ProductItemComponent, (prevProps, nextProps) => {
  return Object.is(prevProps.product, nextProps.product)
})