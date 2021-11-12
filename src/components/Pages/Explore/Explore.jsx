import React, { useEffect, useState } from "react";
import Footer from "../../Shared/Footer/Footer";
import Nav from "../../Shared/Nav/Nav";
import Product from "../../Shared/Product/Product";
import ExploreBanner from "./Banner/ExploreBanner";

const Explore = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://light-wars.herokuapp.com/glasses")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div>
      <Nav />
      <ExploreBanner />

      <div style={{ padding: "5rem 0" }} className="my-container">
        <div className="text-teal-600 text-4xl text-center mb-10">
          Explore Our Glasses
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {products?.map((pd) => (
            <Product key={pd._id} product={pd} />
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Explore;
