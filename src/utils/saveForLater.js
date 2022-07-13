export const saveForLaterHandler = (setSaveForLater, setCart, product) => {
  setCart((pre) => pre.filter((item) => item.id !== product.id));
  setSaveForLater((pre) => [...pre, product]);
};

export const moveToCartFromLater = (
  setSaveForLater,
  setCart,
  product,
  cart
) => {
  setCart((pre) => [...pre, product]);
  setSaveForLater((pre) => pre.filter((item) => item.id !== product.id));
};

export const removeFromLater = (setSaveForLater, product) => {
  setSaveForLater((pre) => pre.filter((item) => item.id !== product.id));
};
