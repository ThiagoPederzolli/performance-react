import { useMemo } from 'react'
import { ProductItem } from "./ProductItem"

interface SearchResultsProps {
  results: Array<{
    id: number;
    price: number;
    title: string;
    priceFormatted: string;
  }>
  onAddToWishList: (id: number) => void;
  totalPrice: number;
}

export function SearchResults({ results, onAddToWishList, totalPrice }: SearchResultsProps) {

  // const totalPrice = useMemo(() => {
  //   return results.reduce((total, product) => {
  //     return total + product.price
  //   }, 0)
  // },[results])

  return (
    <div>
      <h2>{totalPrice}</h2>
      {results.map(product => {
        return (
          <ProductItem product={product} key={product.id} onAddToWishList={onAddToWishList} />
        )
      })}
    </div>
  )
}