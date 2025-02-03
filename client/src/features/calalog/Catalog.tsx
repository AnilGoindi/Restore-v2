import ProductList from "./ProductList";
import { useFethcProductsQuery } from "./catalogApi";

export default function Catalog() {
  const {data, isLoading} = useFethcProductsQuery();

  if (isLoading || !data) return <div>Loading...</div>

  return (
    <>
      <ProductList products={data} />
      
    </>
    
  )
}
