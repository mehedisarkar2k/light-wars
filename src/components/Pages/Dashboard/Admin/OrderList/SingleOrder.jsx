import React from "react";
import { BsPencilSquare } from "react-icons/bs";
import { MdDeleteOutline } from "react-icons/md";

const SingleOrder = () => {
  return (
    <tbody>
      <tr className="w-full font-light text-gray-600 whitespace-no-wrap border">
        <td className="px-4 py-4">Bedram Tamang</td>
        <td className="px-4 py-4">Sunglass Sunglass sunglass</td>
        <td className="px-4 py-4">tmgbedu@gmail.com</td>
        <td className="px-4 py-4">
          <span className="text-sm bg-green-500 text-white rounded-full px-2 py-1">
            Active
          </span>
        </td>
        <td className="text-center py-4">
          <div className="flex items-center space-x-4 text-2xl">
            <span className="fill-current text-green-500 material-icons cursor-pointer">
              <BsPencilSquare />
            </span>
            <span className="fill-current text-red-500 material-icons cursor-pointer">
              <MdDeleteOutline />
            </span>
          </div>
        </td>
      </tr>
    </tbody>
  );
};

export default SingleOrder;
