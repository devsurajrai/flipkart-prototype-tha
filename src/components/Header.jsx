import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="p-3 flex justify-end bg-[#2a55e5] text-white">
      <Link to="/">
        <button className="mr-3 ">Home</button>
      </Link>
      <Link to="/cart">
        <button>Cart</button>
      </Link>
    </header>
  );
};

export default Header;
