import { useNavigate } from "react-router"

const ProductCard = ({product}) => {
  const navigate = useNavigate()
  return (
    <div onClick={() => navigate(`/product/${product._id}`)} className="rounded-[10px] px-6 py-4 space-y-3 shadow-md cursor-pointer hover:shadow-lg">
      <img src={product.thumbnail} alt={product.title}  className="h-61 w-full"/>
      <div>
        <h3 className="font-medium text-xl truncate">{product.title}</h3>
        <p className="font-medium text-sm">{product.brand}</p>
        <p>Rating - {product.rating}</p>

        <p className="font-medium text-2xl mt-6">${product.price}</p>
      </div>
    </div>
  )
}

export default ProductCard