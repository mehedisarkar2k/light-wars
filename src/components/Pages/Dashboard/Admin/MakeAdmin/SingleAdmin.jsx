import React from "react";
import { BsPencilSquare } from "react-icons/bs";
import userImg from "../../../../../images/review_user.webp";

const SingleAdmin = () => {
  return (
    <tbody>
      <tr className="w-full font-light text-gray-600 whitespace-no-wrap border">
        <td className="px-4 py-4">
          <img className="h-10 w-10 rounded-full" src={userImg} alt="" />
        </td>
        <td className="px-4 py-4">Sunglass Sunglass sunglass</td>
        <td className="px-4 py-4">tmgbedu@gmail.com</td>
        <td className="px-4 py-4">
          <span className="text-sm bg-green-500 text-white rounded-full px-2 py-1">
            Admin
          </span>
        </td>
        <td className="text-center mx-auto py-4">
          <div className="flex items-center justify-center space-x-4 text-2xl">
            <span className="block text-green-500 cursor-pointer">
              <BsPencilSquare />
            </span>
          </div>
        </td>
      </tr>
    </tbody>
  );
};

export default SingleAdmin;
