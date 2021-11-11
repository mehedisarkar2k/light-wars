import React from "react";
import { Link } from "react-router-dom";

const PlaceOrder = () => {
  return (
    <div>
      <div className="bg-white py-8 px-6 shadow rounded-lg sm:px-10">
        <form className="mb-0 space-y-6" action="#" method="POST">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email address
            </label>
            <div className="mt-1">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="focus:ring-teal-600 focus:border-teal-600 rounded-lg"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <div className="mt-1">
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="rounded-lg focus:ring-teal-600 focus:border-teal-600"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="company-size"
              className="block text-sm font-medium text-gray-700"
            >
              Country
            </label>
            <div className="mt-1">
              <select name="company-size" id="company-size" className="">
                <option value="">Please select</option>
                <option value="small">Bangladesh</option>
                <option value="medium">USA</option>
                <option value="large">UK</option>
              </select>
            </div>
          </div>

          <div className="flex items-center justify-start">
            <input
              id="terms-and-privacy"
              name="terms-and-privacy"
              type="checkbox"
              className=""
            />

            <div className="">
              <label
                htmlFor="terms-and-privacy"
                className="ml-2 text-sm text-gray-900"
              >
                I agree to the{" "}
                <Link to="/" className="text-teal-600 hover:text-teal-500">
                  Terms
                </Link>{" "}
                and{" "}
                <Link to="/" className="text-teal-600 hover:text-teal-500">
                  Privacy Policy
                </Link>
                .
              </label>
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

export default PlaceOrder;
