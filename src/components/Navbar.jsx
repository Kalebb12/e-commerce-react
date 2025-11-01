import { Button } from "@mui/material";
import { Authenticated, Unauthenticated, useQuery } from "convex/react";
import { ShoppingCart } from "lucide-react";
import { Link, useNavigate } from "react-router";
import { useAuthActions } from "@convex-dev/auth/react";
import { api } from "../../convex/_generated/api";

const Navbar = () => {
  const navigate = useNavigate();
  const { signOut } = useAuthActions();

  const handleSignOut = () => {
    signOut();
  };

  const user = useQuery(api.getUserId.currentUser)
  const cart = useQuery(api.cart.getUserCart,{userId:user?._id})
  
  return (
    <div className="flex justify-between items-center py-3 px-5 shadow-md">
      <h1 className="font-bold text-2xl">
        <Link to="/">E-com</Link>
      </h1>
      <div className="gap-5 flex items-center">
        <Link to="/catalogue">Catalogue</Link>
        <Link to="/arrivals">New Arrivals</Link>

        <Link to="/cart" className="flex items-center gap-2 relative">
          <span>Cart</span>
          <ShoppingCart />
          <div className="absolute bg-[tomato] text-sm w-4 h-4 rounded-full flex justify-center items-center text-white -top-1 -right-2">
            {cart ? cart.length : 0}
          </div>
        </Link>

        <Unauthenticated>
          <Button variant="outlined" onClick={() => navigate("/signin")}>
            Sign in
          </Button>
        </Unauthenticated>
        <Authenticated>
          <Button variant="contained" onClick={() => handleSignOut()}>
            Sign out
          </Button>
        </Authenticated>
      </div>
    </div>
  );
};

export default Navbar;
