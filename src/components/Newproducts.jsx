import { useQuery } from "convex/react";
import { api } from "../../convex/_generated/api";
import ProductCard from "./ProductCard";

const Newproducts = () => {
  const products = useQuery(api.products.get);
  return (
    <div>
      
      {!products && <p>loading...</p>}

      <div className="grid grid-cols-4 gap-5">
        {products &&
          products.map((product) => (
            <ProductCard product={product} key={product._id} />
          ))}
      </div>
    </div>
  );
};

export default Newproducts;
