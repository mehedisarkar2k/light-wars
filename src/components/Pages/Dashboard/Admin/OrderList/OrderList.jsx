import React from "react";
import SingleOrder from "./SingleOrder";

const OrderList = () => {
  return (
    <div>
      <div className="bg-white rounded-lg shadow-lg py-6">
        <div className="block overflow-x-auto mx-6">
          <table className="w-full text-left rounded-lg">
            <thead>
              <tr className="text-gray-700 border border-b-0">
                <th className="px-4 py-3 font-bold">Name</th>
                <th className="px-4 py-3 font-bold">Service</th>
                <th className="px-4 py-3 font-bold">Email</th>
                <th className="px-4 py-3 font-bold">Status</th>
                <th className="px-4 py-3 font-bold">Action</th>
              </tr>
            </thead>

            {[...Array(10)].map((_, i) => (
              <SingleOrder key={i} />
            ))}
          </table>
        </div>
      </div>
    </div>
  );
};

export default OrderList;
