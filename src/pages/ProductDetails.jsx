import { useParams } from "react-router"
import { api } from "../../convex/_generated/api"
import { useQuery } from "convex/react"

const ProductDetails = () => {
  const {id} = useParams()
  const product = useQuery(api.product.get, {id})
  console.log(product)
  return (
    <div>ProductDetails - {id}</div>
  )
}

export default ProductDetails