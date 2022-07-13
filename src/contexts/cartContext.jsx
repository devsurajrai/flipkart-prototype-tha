import { createContext, useContext, useState } from "react";

const CartContext = createContext(null);

export const useCartContext = () => useContext(CartContext);

export const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [saveForLater, setSaveForLater] = useState([]);
  return (
    <CartContext.Provider
      value={{ cart, setCart, saveForLater, setSaveForLater }}
    >
      {children}
    </CartContext.Provider>
  );
};
