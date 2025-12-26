import { useEffect, useState } from "react";
import Product from "../../components/ProductCard/Product";
import Aos from "aos";
import "aos/dist/aos.css";

import { products as PRODUCTS } from "../../data/products";

const Shop = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
    // Optional refresh if animations don't trigger reliably
    // Aos.refresh();
  }, []);

  // Use products.js as the source of truth (no fetch)
  const [products] = useState(PRODUCTS);

  return (
    <div className="max-w-7xl mx-auto my-8">
      <h1
        data-aos="flip-up"
        className="text-4xl font-extrabold text-center my-8 text-brand"
      >
        SHOP
      </h1>

      <div
        data-aos="zoom-in"
        className="grid grid-cols-1 md:grid-cols-4 gap-4 px-4"
      >
        {products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Shop;
