import { Button } from "@mui/material";
import { ShoppingCart } from "lucide-react";
import { Link, useNavigate } from "react-router";

const Navbar = () => {
  const navigate = useNavigate()
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
            0
          </div>
        </Link>

        <Button variant="outlined" onClick={()=> navigate('/signin')}>Sign in</Button>
        <Button variant="contained">Sign up</Button>
      </div>
    </div>
  );
};

export default Navbar;
