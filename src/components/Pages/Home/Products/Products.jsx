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
    <div>
      <div className="my-container grid grid-cols-3 gap-6">
        {products?.map((pd) => (
          <Product key={pd._id} product={pd} />
        ))}
      </div>
    </div>
  );
};

export default Products;
