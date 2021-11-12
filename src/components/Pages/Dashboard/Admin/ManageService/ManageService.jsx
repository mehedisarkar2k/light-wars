import React, { useEffect, useState } from "react";
import Spinner from "../../../../Shared/Loader/Spinner";
import SingleService from "./SingleService";

const ManageService = () => {
  const [services, setServices] = useState([]);
  const [isDelete, setIsDelete] = useState(null);

  const deleteOrder = (id) => {
    fetch(`https://light-wars.herokuapp.com/glasses/${id}`, {
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
    fetch("https://light-wars.herokuapp.com/glasses")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, [isDelete]);

  if (services.length < 1) return <Spinner />;

  return (
    <div className="grid grid-cols-3 gap-4">
      {services.map((service) => (
        <SingleService
          key={service._id}
          service={service}
          deleteOrder={deleteOrder}
        />
      ))}
    </div>
  );
};

export default ManageService;
