export const increaseQuantity = (setCart, product) => {
  setCart((pre) =>
    pre.map((item) =>
      item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
    )
  );
};
export const decreaseQuantity = (setCart, product) => {
  product.quantity !== 1 &&
    setCart((pre) =>
      pre.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity - 1 } : item
      )
    );
};
