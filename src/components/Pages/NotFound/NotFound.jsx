import React, { useEffect } from "react";
import { useHistory } from "react-router";
import p404 from "../../../images/404.png";

const NotFound = () => {
  const history = useHistory();

  useEffect(() => {
    document.title = "404 | Lightwars";
  }, []);

  return (
    <div className="bg-gray-50">
      <div className="my-container">
        <div className="w-full md:2/3 lg:w-1/2 mx-auto">
          <h2 className="text-center text-red-500 text-3xl">
            Ops! Page not found. Go back and try again!
          </h2>

          <div className="flex items-center justify-center mt-4">
            <button
              onClick={() => history.goBack()}
              className="btn btn-primary"
            >
              Go Back
            </button>
          </div>

          <img src={p404} alt="" />
        </div>
      </div>
    </div>
  );
};

export default NotFound;
