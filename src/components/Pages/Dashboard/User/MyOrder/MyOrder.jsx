import React from "react";

const MyOrder = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 mt-5 gap-4">
      {[...Array(4)].map((_, i) => (
        <div key={i} className="rounded-md p-4 bg-white">
          <div className="flex items-center justify-between">
            <img
              className="w-1/4"
              src="https://i.ibb.co/QpVtMtW/15-300x300.jpg"
              alt=""
            />
            <h4 className="text-sm px-3 py-1 rounded-full bg-red-100 text-gray-800">
              Pending
            </h4>
          </div>

          <h3 className="text-gray-700 text-2xl">This is title title</h3>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
            maxime debitis dicta repellat autem praesentium?
          </p>

          <div className="flex items-center justify-center mt-3">
            <button className="btn btn-danger px-3 py-1 text-lg bg-red-300 hover:bg-red-200 text-gray-800">
              Cancel Order
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MyOrder;
