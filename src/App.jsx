import { Routes, Route } from "react-router-dom";
import { Cart } from "./components/Cart.jsx";
import { ProductListing } from "./components/ProductListing.jsx";
import Header from "./components/Header";

export const App = () => {
  return (
    <div className="h-[100vh] overflow-hidden">
      <Header />
      <Routes>
        <Route path="/" element={<ProductListing />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
};
