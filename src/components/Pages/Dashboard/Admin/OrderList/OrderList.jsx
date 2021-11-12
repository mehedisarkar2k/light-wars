import React, { useEffect, useState } from "react";
import useAuth from "../../../../../hooks/useAuth";
import SingleOrder from "./SingleOrder";

const OrderList = () => {
  const [orders, setOrders] = useState();
  const { user } = useAuth();

  useEffect(() => {
    fetch(`http://localhost:5000/orders`)
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, [user.email]);
  return (
    <div>
      <div className="bg-white rounded-lg shadow-lg py-6">
        <div className="block overflow-x-auto mx-6">
          <table className="w-full text-left rounded-lg">
            <thead>
              <tr className="text-gray-700 border border-b-0">
                <th className="px-4 py-3 font-bold">Order By</th>
                <th className="px-4 py-3 font-bold">Service</th>
                <th className="px-4 py-3 font-bold">Email</th>
                <th className="px-4 py-3 font-bold">Status</th>
                <th className="px-4 py-3 font-bold">Action</th>
              </tr>
            </thead>

            {orders?.map((order) => (
              <SingleOrder key={order._id} order={order} />
            ))}
          </table>
        </div>
      </div>
    </div>
  );
};

export default OrderList;
