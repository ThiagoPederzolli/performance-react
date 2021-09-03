import { useMemo } from 'react'
import { List, ListRowRenderer } from 'react-virtualized'
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

  const rowRender: ListRowRenderer = ({ index, key, style }) => {
    return (
      <div key={key} style={style}>
        <ProductItem product={results[index]} onAddToWishList={onAddToWishList} />
      </div>
    )
  }

  return (
    <div>
      <h2>{totalPrice}</h2>
      <List
        height={300}
        rowHeight={30}
        width={900}
        overscanColumnCount={5} // quantos itens pra cima ou pra baixo quero já deixar carregado.
        rowCount={results.length}
        rowRenderer={rowRender}
      />
      {/* {results.map(product => {
        return (
          <ProductItem product={product} key={product.id} onAddToWishList={onAddToWishList} />
        )
      })} */}
    </div>
  )
}