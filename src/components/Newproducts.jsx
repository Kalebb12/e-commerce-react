import { useQuery } from "convex/react";
import { api } from "../../convex/_generated/api";
import ProductCard from "./ProductCard";
import { Skeleton } from "@mui/material";

const Newproducts = () => {
  const products = useQuery(api.products.get);
  return (
    <div className="space-y-5 text-center px-4 py-12">
      <h1 className="font-bold text-3xl">New Arrivals</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, esse
        corporis minus accusantium rerum <br /> ab amet doloribus voluptatem.
        Earum dolore in quibusdam, harum praesentium amet animi possimus tempora
        voluptas quis.
      </p>

      {!products && (
        <div className="grid grid-cols-4 gap-5">
          {Array(8)
            .fill(null)
            .map((_, i) => {
              return (
                <div key={i} className="rounded-[10px] space-y-3">
                  <Skeleton variant="rectangular" width="100%" height={244} />
                  <Skeleton  height={40} width="80%" />
                  <Skeleton width="40%" height={26} />
                  <Skeleton width="60%" height={34} />
                  <Skeleton width="50%" height={48} />
                </div>
              );
            })}
        </div>
      )}

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
