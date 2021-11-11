import React from "react";
import userImg from "../../../../images/review_user.webp";
import Ratings from "../../../Shared/Ratings/Ratings";

const Review = ({ ratings }) => {
  return (
    <div className="flex flex-col items-center justify-center mx-2">
      <img className="rounded-full h-20 w-20" src={userImg} alt="User" />
      <h2 className="text-xl text-teal-600 mt-4">Mehedi Sarkar</h2>
      <p className="text-center text-gray-700">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt,
        obcaecati?
      </p>
      <Ratings ratings={ratings} />
    </div>
  );
};

export default Review;
