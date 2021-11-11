import React, { useState } from "react";
import { List, ListItem, Range } from "tailwind-mobile/react";

const Review = () => {
  const [rating, setRating] = useState(4.7);

  return (
    <div>
      <div className="bg-white py-8 px-6 shadow rounded-lg sm:px-10">
        <form className="mb-0 space-y-6" action="#" method="POST">
          <div className="w-full">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Your Name
            </label>
            <div className="mt-1">
              <input
                id="name"
                name="name"
                type="text"
                autoComplete="name"
                required
                className="focus:ring-teal-600 focus:border-teal-600 rounded-lg w-full"
              />
            </div>
          </div>

          <div className="w-full">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Your Email
            </label>
            <div className="mt-1">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="focus:ring-teal-600 focus:border-teal-600 rounded-lg w-full"
              />
            </div>
          </div>

          <div className="w-full">
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700"
            >
              Your Feedback
            </label>
            <div className="mt-1">
              <textarea
                id="message"
                name="message"
                autoComplete="message"
                required
                className="focus:ring-teal-600 focus:border-teal-600 rounded-lg w-full"
              />
            </div>
          </div>

          <div className="w-full items-center grid grid-cols-6">
            <h4 className="col-span-6 md:col-span-2 text-xl font-semibold">
              Rating: {rating}
            </h4>
            <List
              className="col-span-6 md:col-span-4 text-xl font-semibold md:px-10"
              style={{ margin: "0 10px" }}
            >
              <ListItem
                innerClassName="flex space-x-4 "
                innerChildren={
                  <>
                    <span>0</span>
                    <Range
                      value={rating}
                      step={0.1}
                      min={0}
                      max={5}
                      onChange={(e) => setRating(e.target.value)}
                    />
                    <span>5</span>
                  </>
                }
              />
            </List>
          </div>

          <div>
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-teal-600 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
            >
              Send Us
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Review;
