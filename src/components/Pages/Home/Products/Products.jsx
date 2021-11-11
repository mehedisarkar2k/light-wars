import React, { useEffect, useState } from "react";
import Product from "../../../Shared/Product/Product";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://light-wars.herokuapp.com/glasses?limit=6")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div className="py-20">
      <div className="my-container">
        <h3 className="text-teal-600 text-4xl mb-10 text-center">
          Our Popular Products
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products?.map((pd) => (
            <Product key={pd._id} product={pd} />
          ))}
        </div>

        <div className="flex items-center justify-center mt-10">
          <button className="btn btn-primary inline-block">
            See All Products
          </button>
        </div>
      </div>
    </div>
  );
};

export default Products;
