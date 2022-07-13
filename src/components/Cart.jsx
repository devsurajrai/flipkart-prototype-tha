import React from "react";
import { useCartContext } from "../contexts/cartContext";
import { ProductCard } from "./ProductCard";
import { Button } from "./Button";
import { SaveForLater } from "./SaveForLater";

const Cart = () => {
  const { cart, saveForLater } = useCartContext();
  console.log("cart ", cart, "saveForLater", saveForLater);
  const totalAmount = () => {
    let totalPrice = 0;
    let totalDiscount = 0;
    let totalMRP = 0;
    for (let i = 0; i < cart.length; i++) {
      totalPrice +=
        Math.floor(cart[i].mrp - (cart[i].discount / 100) * cart[i].mrp) *
        cart[i].quantity;
      totalDiscount +=
        Math.floor((cart[i].discount / 100) * cart[i].mrp) * cart[i].quantity;
      totalMRP += cart[i].mrp * cart[i].quantity;
    }
    return { totalPrice, totalDiscount, totalMRP };
  };
  const { totalPrice, totalDiscount, totalMRP } = totalAmount();
  return (
    <div className="flex justify-center">
      {cart.length !== 0 || saveForLater.length !== 0 ? (
        <>
          <div className="flex  h-[100vh] ">
            <section className=" w-[70vw]  overflow-scroll pt-4 pb-16">
              <span className="p-5 text-xl font-semibold">
                My Cart ({cart.length})
              </span>
              <div className="flex flex-wrap">
                {cart.map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    inCart={true}
                  />
                ))}
              </div>
              <SaveForLater />
            </section>

            <section className={`w-[30vw] p-6 `}>
              <div className="mb-4">
                <h3 className="pb-3">PRICE DETAILS</h3>
                <hr />
                <div className=" flex justify-between">
                  <span className=" inline-block pt-3">
                    Price ({cart.length})
                  </span>
                  <span className=" inline-block pt-3">₹{totalMRP}</span>
                </div>
                <div className=" flex justify-between">
                  <span className="  inline-block pt-3">Discount</span>

                  <p className=" text-green-800 inline-block pt-3">
                    -₹{totalDiscount}
                  </p>
                </div>
                <div className="pb-3 flex justify-between">
                  <span className=" inline-block pt-3">Delivery </span>
                  <span className=" inline-block pt-3 text-green-800">
                    FREE
                  </span>
                </div>
                <hr />
                <div className=" flex justify-between">
                  <span className="  inline-block pt-3 text-lg font-semibold">
                    Total Amount
                  </span>
                  <span className="inline-block pt-3 text-lg font-semibold">
                    ₹{totalPrice}
                  </span>
                </div>
                <hr />
                <span className="inline-block pt-3 text-lg font-semibold text-green-800">
                  You will save ₹{totalDiscount} on this order
                </span>
              </div>
              <Button
                buttonText="PLACE ORDER"
                color="2a55e5"
                textColor="white"
              />
            </section>
          </div>
        </>
      ) : (
        <div className="p-5 bg-red-300 text-red-600 w-[50vw] m-5 flex justify-center font-semibold text-xl">
          Cart is empty
        </div>
      )}
    </div>
  );
};

export { Cart };
