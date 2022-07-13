import { ProductCard } from "./ProductCard";

export const Products = ({ products }) => {
  return (
    <div className="p-3 font-semibold overflow-scroll ">
      <h3>Showing {products.length} products</h3>
      <section className="h-[100vh] w-[80vw]  grid grid-cols-4  gap-5 ">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </section>
    </div>
  );
};
