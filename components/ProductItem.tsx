import { memo } from 'react'

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
  return (
    <div>
      {product.title} <strong>{product.priceFormatted}</strong>
      <button onClick={() => onAddToWishList(product.id)}>Adicionar aos Favoritos </button>
    </div>
  )
}

export const ProductItem = memo(ProductItemComponent, (prevProps, nextProps) => {
  return Object.is(prevProps.product, nextProps.product)
})