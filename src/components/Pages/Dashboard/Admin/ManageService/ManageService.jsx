import React, { useEffect, useState } from "react";
import SingleService from "./SingleService";

const ManageService = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("https://light-wars.herokuapp.com/glasses")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <div className="grid grid-cols-3 gap-4">
      {services.map((service) => (
        <SingleService key={service._key} service={service} />
      ))}
    </div>
  );
};

export default ManageService;
