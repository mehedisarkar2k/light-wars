import React from "react";
import SingleAdmin from "./SingleAdmin";

const Admins = () => {
  return (
    <div>
      <div className="bg-white rounded-lg shadow-lg py-6">
        <div className="block overflow-x-auto mx-6">
          <table className="w-full text-left rounded-lg">
            <thead>
              <tr className="text-gray-700 border border-b-0">
                <th className="px-4 py-3 font-bold">Thumb</th>
                <th className="px-4 py-3 font-bold">Name</th>
                <th className="px-4 py-3 font-bold">Email</th>
                <th className="px-4 py-3 font-bold">Role</th>
                <th className="px-4 py-3 font-bold">Update Role</th>
              </tr>
            </thead>

            {[...Array(5)].map((_, i) => (
              <SingleAdmin key={i} />
            ))}
          </table>
        </div>
      </div>
    </div>
  );
};

export default Admins;
