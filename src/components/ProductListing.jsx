import { Products } from "./Products.jsx";
import { Sidebar } from "./Sidebar.jsx";
import PRODUCT_DATA from "../data/products.json";
export const ProductListing = () => {
  return (
    <main className="flex flex-row h-[100vh] pb-16">
      <Sidebar products={PRODUCT_DATA} />
      <Products products={PRODUCT_DATA} />
    </main>
  );
};
