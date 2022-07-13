import { useCartContext } from "../contexts/cartContext";
import { ProductCard } from "./ProductCard";

export const SaveForLater = () => {
  const { saveForLater, setSaveForLater } = useCartContext();
  return (
    <div className="flex flex-col">
      <span className="p-5 text-xl font-semibold">
        Saved for later ({saveForLater.length})
      </span>
      <div className="flex flex-wrap">
        {saveForLater.length !== 0 &&
          saveForLater.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              inSaveForLater={true}
            />
          ))}
      </div>
    </div>
  );
};
