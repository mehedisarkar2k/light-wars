import React, { useEffect, useState } from "react";
import SingleAdmin from "./SingleAdmin";

const Admins = () => {
  const [isUpdate, setIsUpdate] = useState(null);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, [isUpdate]);

  const makeAdmin = (user) => {
    fetch(`http://localhost:5000/users`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        name: user.name,
        email: user.email,
        role: "admin",
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          setIsUpdate(!isUpdate);
        } else {
          setIsUpdate(false);
        }
      });
  };

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

            {users?.map((user) => (
              <SingleAdmin key={user._id} user={user} makeAdmin={makeAdmin} />
            ))}
          </table>
        </div>
      </div>
    </div>
  );
};

export default Admins;
