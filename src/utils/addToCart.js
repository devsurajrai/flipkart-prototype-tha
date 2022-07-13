export const addToCart = (setCart, product, cart) => {
  const isProductInCart = cart.find((item) => item.id === product.id);
  !isProductInCart && setCart((pre) => [...pre, product]);
};

export const removeFromCart = (setcart, product) => {
  setcart((pre) => pre.filter((item) => item.id !== product.id));
};
