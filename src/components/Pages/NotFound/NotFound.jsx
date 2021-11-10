import React from "react";
import { useHistory } from "react-router";

const NotFound = () => {
  const history = useHistory();
  return (
    <div>
      <h2 className="text-center text-red-500 text-5xl">Not Found.</h2>

      <button onClick={() => history.goBack()} className="btn btn-primary">
        Go Back
      </button>
    </div>
  );
};

export default NotFound;
