import React from "react";

const AddService = () => {
  return (
    <div>
      <div className="bg-white py-8 px-6 shadow rounded-lg sm:px-10">
        <form className="mb-0 space-y-6" action="#" method="POST">
          <div className="w-full">
            <label
              htmlFor="productName"
              className="block text-sm font-medium text-gray-700"
            >
              Product Name
            </label>
            <div className="mt-1">
              <input
                id="productName"
                name="productName"
                type="text"
                autoComplete="productName"
                required
                className="focus:ring-teal-600 focus:border-teal-600 rounded-lg w-full"
              />
            </div>
          </div>

          <div className="w-full">
            <label
              htmlFor="description"
              className="block text-sm font-medium text-gray-700"
            >
              Product Description
            </label>
            <div className="mt-1">
              <textarea
                id="description"
                name="description"
                autoComplete="description"
                required
                className="focus:ring-teal-600 focus:border-teal-600 rounded-lg w-full"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-teal-600 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
            >
              Sign up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddService;
