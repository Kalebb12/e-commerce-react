import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";
import Navbar from "./components/Navbar";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="*" element={<NotFound/>} />
      </Routes>
    </>
  );
}

export default App;
