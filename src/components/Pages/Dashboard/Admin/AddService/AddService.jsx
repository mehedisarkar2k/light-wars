import React, { useState } from "react";
import { List, ListItem, Range } from "tailwind-mobile/react";

const AddService = () => {
  const [price, setPrice] = useState(150);

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

          <div className="w-full items-center grid grid-cols-6">
            <h4 className="col-span-6 md:col-span-2 text-xl font-semibold">
              Price: ${price}
            </h4>
            <List
              className="col-span-6 md:col-span-4 text-xl font-semibold "
              style={{ margin: "0 10px" }}
            >
              <ListItem
                innerClassName="flex space-x-4 "
                innerChildren={
                  <>
                    <span>$0</span>
                    <Range
                      value={price}
                      step={1}
                      min={0}
                      max={500}
                      onChange={(e) => setPrice(e.target.value)}
                    />
                    <span>$500</span>
                  </>
                }
              />
            </List>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-center space-x-4">
            <div className="w-full">
              <label
                htmlFor="img-1"
                className="block text-sm font-medium text-gray-700"
              >
                Image URL-1
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  id="img-1"
                  name="img-1"
                  autoComplete="img-1"
                  required
                  className="focus:ring-teal-600 focus:border-teal-600 rounded-lg w-full"
                />
              </div>
            </div>
            <div className="w-full">
              <label
                htmlFor="img-2"
                className="block text-sm font-medium text-gray-700"
              >
                Image URL-2
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  id="img-2"
                  name="img-2"
                  autoComplete="img-2"
                  required
                  className="focus:ring-teal-600 focus:border-teal-600 rounded-lg w-full"
                />
              </div>
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-teal-600 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
            >
              Add Item
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddService;
