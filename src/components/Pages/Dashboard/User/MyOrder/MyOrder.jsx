import React, { useEffect, useState } from "react";
import useAuth from "../../../../../hooks/useAuth";

const MyOrder = () => {
  const [myOrders, setMyOrders] = useState();
  const { user } = useAuth();

  useEffect(() => {
    fetch(`http://localhost:5000/orders?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => setMyOrders(data));
  }, [user.email]);

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 mt-5 gap-4">
      {myOrders?.map((myOrder) => (
        <div key={myOrder._id} className="rounded-md p-4 bg-white">
          <div className="flex items-center justify-between">
            <img className="w-1/4" src={myOrder.product.img} alt="" />
            <h4 className="text-sm px-3 py-1 rounded-full bg-red-100 text-gray-800">
              {myOrder.order.status}
            </h4>
          </div>

          <h3 className="text-gray-700 text-2xl">{myOrder.product.name}</h3>
          <p className="text-gray-600">{myOrder.product.descriptions}</p>

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
