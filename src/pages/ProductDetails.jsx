import { useParams } from "react-router";
import { api } from "../../convex/_generated/api";
import { useMutation, useQuery } from "convex/react";
import { useState } from "react";
import { Rating } from "@mui/material";
import { getAuthUserId } from "@convex-dev/auth/server";

const ProductDetails = () => {
  const { id } = useParams();
  const product = useQuery(api.product.get, { id });

  const [num, setNum] = useState(1);
  const [random] = useState(Math.round(Math.random() * 10));

  const increase = () => {
    setNum(num + 1);
  };

  const decrease = () => {
    if (num > 1) {
      setNum(num - 1);
    }
  };

  const user = useQuery(api.getUserId.currentUser);
  const mutate = useMutation(api.cart.addToCart);
  
  const handleAddtoCart = async () => {
    if (!user) return alert("Please login");
    mutate({
      userId: user._id,
      productId: id,
      quantity: num,
    });

    alert('product added to cart')
  };

  if (!product) {
    return <div>Loading.... </div>;
  }

  return (
    <div>
      <div className="grid grid-cols-2">
        <div className="bg-gray-300 flex items-center justify-center">
          <img src={product.thumbnail} alt={product.title} />
        </div>
        <div className="p-4 space-y-4">
          <div>
            <p className="text-sm font-semibold text-slate-600">
              {product.brand}
            </p>

            <div className="flex items-center gap-10">
              <h1 className="text-3xl font-medium">{product.title}</h1>
              <p
                className={`${product.availabilityStatus == "In Stock" ? "bg-green-200 text-green-700" : "bg-red-200 text-red-700"} px-2 py-1 rounded-md`}
              >
                <q>{product.availabilityStatus}</q>
              </p>
            </div>
          </div>

          <Rating name="rating" readOnly value={product.rating} />

          <h1 className="text-2xl font-semibold">${product.price}</h1>
          <div className="border-red-500 border-1 w-fit p-3 bg-red-200 text-red-400">
            {random} people are viewing this right now
          </div>

          <div className="space-y-4">
            <p>Quantity</p>

            <div className="flex gap-10 items-center">
              <div className="flex items-center border-black border-2 gap-2 w-fit rounded-md">
                <button
                  onClick={increase}
                  className="px-4 py-2 border-r-2 border-black"
                >
                  +
                </button>
                <div className="px-4">{num}</div>
                <button
                  onClick={decrease}
                  className="px-4 py-2 border-l-2 border-black"
                >
                  -
                </button>
              </div>

              <button
                className="cursor-pointer border-1 border-black rounded-md px-4 py-2 hover:shadow-md active:scale-97"
                onClick={() => handleAddtoCart()}
              >
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
