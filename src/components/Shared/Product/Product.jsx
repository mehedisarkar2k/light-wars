import React from "react";
import Ratings from "../Ratings/Ratings";

const Product = ({ product }) => {
  const { name, price, img, img2, ratings } = product;

  return (
    <div className="overflow-hidden group border rounded-xl shadow-lg">
      <div className="h-40 md:h-72 lg:h-56 relative">
        <img
          className="md:absolute -top-14 left-0 w-full h-full object-cover transition-all duration-500 group-hover:hidden block"
          src={img}
          alt=""
        />
        <img
          className="absolute -top-14 left-0 w-full h-full object-cover transition-all duration-500 hidden group-hover:block"
          src={img2}
          alt=""
        />
      </div>

      <div className="my-10 text-center space-y-2">
        <h2 className="text-xl text-teal-600">{name}le</h2>
        <Ratings ratings={ratings} />
        <p className="font-bold tracking-wider text-teal-600">${price}</p>
        <button className="btn btn-primary py-1 px-3">Buy Now</button>
      </div>
    </div>
  );
};

export default Product;
