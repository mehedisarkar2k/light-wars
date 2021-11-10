import React from "react";

const Product = ({ product }) => {
  const { name, price, img, img2 } = product;
  return (
    <div className="overflow-hidden group border rounded-xl shadow-lg">
      <div className="h-56">
        <img
          className="w-full h-full object-cover transition-all duration-500 group-hover:hidden block"
          src={img}
          alt=""
        />
        <img
          className="w-full h-full object-cover transition-all duration-500 hidden group-hover:block"
          src={img2}
          alt=""
        />
      </div>

      <div className="my-10 text-center space-y-2">
        <h2 className="text-xl text-teal-600">{name}le</h2>
        <p className="font-bold tracking-wider text-teal-600">${price}</p>
        <button className="btn btn-primary py-1 px-3">Buy Now</button>
      </div>
    </div>
  );
};

export default Product;
