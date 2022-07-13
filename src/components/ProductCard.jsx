import { Badge } from "./Badge";
import { Button } from "./Button";
import { useCartContext } from "../contexts/cartContext";
import { addToCart, removeFromCart } from "../utils/addToCart";
import {
  moveToCartFromLater,
  removeFromLater,
  saveForLaterHandler,
} from "../utils/saveForLater";
import { decreaseQuantity, increaseQuantity } from "../utils/productQuantity";

const ProductCard = ({ product, inCart, inSaveForLater }) => {
  const { cart, setCart, saveForLater, setSaveForLater } = useCartContext();
  console.log("card", cart);
  return (
    <div className="w-[15rem] flex flex-col   items-center r p-5 cursor-pointer hover:shadow-md ">
      <div className="h-48 w-48">
        <img
          className="w-[100%] h-[100%] object-cover"
          src={product.image}
          alt={product.product}
        />
      </div>
      <Badge text={product.brand} />
      <div className="my-2">
        <p className="w-[20ch] font-semibold cursor-pointer truncate ">
          {product.product}
        </p>
        <div className="">
          <span className=" mr-2">
            ₹{Math.floor(product.mrp - (product.discount / 100) * product.mrp)}
          </span>
          <s className="text-slate-500">
            <span className=" mr-1 ">₹{product.mrp}</span>
          </s>
          <span className="text-green-800">{product.discount}%</span>
        </div>
        {inCart && (
          <div className="w-full ">
            <button
              onClick={() => decreaseQuantity(setCart, product)}
              className="p-1 border-2 font-semibold text-xs"
            >
              -
            </button>
            <span className="inline-block px-2 font-semibold text-xs">
              {product.quantity}
            </span>
            <button
              onClick={() => increaseQuantity(setCart, product)}
              className="p-1 border-2 font-semibold text-xs"
            >
              +
            </button>
          </div>
        )}
      </div>
      {inCart ? (
        <>
          <Button
            buttonText="SAVE FOR LATER"
            color="2a55e5"
            textColor="white"
            callback={() =>
              saveForLaterHandler(setSaveForLater, setCart, product)
            }
          />
          <Button
            callback={() => removeFromCart(setCart, product)}
            buttonText="REMOVE FROM CART"
          />
        </>
      ) : inSaveForLater ? (
        <>
          <Button
            buttonText="MOVE TO CART"
            callback={() =>
              moveToCartFromLater(setSaveForLater, setCart, product, cart)
            }
          />
          <Button
            callback={() => removeFromLater(setSaveForLater, product)}
            buttonText="REMOVE"
            color="2a55e5"
            textColor="white"
          />
        </>
      ) : (
        <>
          <Button buttonText="BUY NOW" color="2a55e5" textColor="white" />
          <Button
            buttonText="ADD TO CART"
            callback={() => addToCart(setCart, product, cart)}
          />
        </>
      )}
    </div>
  );
};

export { ProductCard };
