export const Sidebar = ({ products }) => {
  const brands = products.map((product) => product.brand.toUpperCase());
  const sizes = products.map((product) => product.size.toUpperCase());
  console.log(brands);
  return (
    <aside className="pl-8 h-[100vh]  w-[20vw] shadow-md">
      <section className="my-10">
        <h3 className="text-xl font-semibold">SORT BY PRICE</h3>
        <div className="flex flex-col ">
          <label>
            <input type="radio" name="sort_by_price" /> Low to High
          </label>
          <label>
            <input type="radio" name="sort_by_price" /> High to Low
          </label>
        </div>
      </section>
      <section>
        <h3 className="text-xl font-semibold">Filter</h3>
        <h4 className="font-semibold">BRAND</h4>
        <div className="flex flex-col pb-2 ">
          {brands.map((brand) => {
            return (
              <label>
                <input type="checkbox" name="sort_by_price" /> {brand}
              </label>
            );
          })}
        </div>
        <h4 className="font-semibold">SIZE</h4>
        <div className="flex flex-col ">
          {sizes.map((size, idx) => {
            return (
              <label key={idx}>
                <input type="checkbox" name="sort_by_price" /> {size}
              </label>
            );
          })}
        </div>
      </section>
    </aside>
  );
};
