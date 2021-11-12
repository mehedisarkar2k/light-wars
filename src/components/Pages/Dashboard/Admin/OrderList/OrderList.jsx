import React, { useEffect, useState } from "react";
import useAuth from "../../../../../hooks/useAuth";
import Spinner from "../../../../Shared/Loader/Spinner";
import SingleOrder from "./SingleOrder";

const OrderList = () => {
  const [orders, setOrders] = useState([]);
  const { user } = useAuth();
  const [isDelete, setIsDelete] = useState(null);

  const deleteOrder = (id) => {
    fetch(`https://light-wars.herokuapp.com/order/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount) {
          setIsDelete(!isDelete);
        } else {
          setIsDelete(false);
        }
      });
  };

  const approveProduct = (order) => {
    const updateOrder = { ...order.order };
    updateOrder.status = "approved";
    console.log(order, updateOrder);

    if (orders.length !== 0) {
      console.log("in condition");
      fetch(`https://light-wars.herokuapp.com/order?id=${order._id}`, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(updateOrder),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.modifiedCount) {
            setIsDelete(!isDelete);
          } else {
            setIsDelete(false);
          }
        });
    }
  };

  useEffect(() => {
    fetch(`https://light-wars.herokuapp.com/orders`)
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, [user.email, isDelete]);

  if (orders.length === 0)
    return (
      <h1 className="text-red-500 text-center py-20 text-3xl">
        No Order Found!
      </h1>
    );

  if (orders.length < 1) {
    return <Spinner />;
  }

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
              <SingleOrder
                key={order._id}
                order={order}
                deleteOrder={deleteOrder}
                approveProduct={approveProduct}
              />
            ))}
          </table>
        </div>
      </div>
    </div>
  );
};

export default OrderList;
