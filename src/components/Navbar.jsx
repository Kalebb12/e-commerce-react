import { Button } from "@mui/material";
import { Link } from "react-router";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center py-3 px-5 shadow-md">
      <h1 className="font-bold text-2xl">
        <Link to="/">E-com</Link>
      </h1>
      <div className="gap-5 flex items-center">
        <a href="">Catalogue</a>
        <a href="">New Arrivals</a>
        <a href="">Best Offer</a>
        <Button variant="outlined">Sign in</Button>
        <Button variant="contained">Sign up</Button>
      </div>
    </div>
  );
};

export default Navbar;
