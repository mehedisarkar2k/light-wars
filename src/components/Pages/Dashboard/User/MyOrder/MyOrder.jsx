import React, { useEffect, useState } from "react";
import useAuth from "../../../../../hooks/useAuth";
import Spinner from "../../../../Shared/Loader/Spinner";

const MyOrder = () => {
  const [myOrders, setMyOrders] = useState([]);
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

  useEffect(() => {
    fetch(`https://light-wars.herokuapp.com/orders?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => setMyOrders(data));
  }, [user.email, isDelete]);

  if (myOrders.length === 0)
    return (
      <h1 className="text-red-500 text-center py-20 text-3xl">
        No Order Found!
      </h1>
    );
  if (myOrders.length < 1) return <Spinner />;

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 mt-5 gap-4">
      {myOrders?.map((myOrder) => (
        <div key={myOrder._id} className="rounded-md p-4 bg-white">
          <div className="flex items-center justify-between">
            <img className="w-1/4" src={myOrder.product.img} alt="" />
            <h4
              className={`text-sm px-3 py-1 rounded-full ${
                myOrder.order.status === "pending"
                  ? "bg-red-200"
                  : "bg-green-100"
              } text-gray-800`}
            >
              {myOrder.order.status}
            </h4>
          </div>

          <h3 className="text-gray-700 text-2xl">{myOrder.product.name}</h3>
          <p className="text-gray-600">{myOrder.product.descriptions}</p>

          {myOrder.order.status === "pending" && (
            <div className="flex items-center justify-center mt-3">
              <button
                onClick={() => deleteOrder(myOrder._id)}
                className="btn btn-danger px-3 py-1 text-lg bg-red-300 hover:bg-red-200 text-gray-800"
              >
                Cancel Order
              </button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default MyOrder;
