import React from "react";
import { useForm } from "react-hook-form";
import { GrClose } from "react-icons/gr";
import { Link, useHistory } from "react-router-dom";

const LoginIn = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);
  const history = useHistory();

  return (
    <div className="bg-teal-50">
      <div className="flex items-center justify-center min-h-screen">
        <div className="max-w-lg mx-auto rounded-lg shadow-xl overflow-hidden py-10 px-20 bg-white relative">
          <div
            onClick={() => history.push("/")}
            className="absolute top-2 left-0 btn px-4 animate-bounce "
          >
            <GrClose size="1.5em" />
          </div>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="">
              <h2 className="text-teal-700 text-2xl font-bold text-center">
                Login
              </h2>
              <p className="text-teal-600 text-center ">Welcome back!</p>
            </div>

            <div className="grid grid-cols-6 gap-6 space-y-2">
              <div className="col-span-6 relative border-b-2 focus-within:border-teal-700">
                <input
                  required
                  {...register("email")}
                  type="email"
                  name="email"
                  placeholder=" "
                  className="block w-full appearance-none focus:outline-none bg-transparent"
                />
                <label
                  htmlFor="email"
                  className="absolute top-0 -z-1 duration-300 origin-0"
                >
                  Email
                </label>
              </div>

              <div className="col-span-6 relative border-b-2 focus-within:border-teal-700">
                <input
                  required
                  {...register("password")}
                  type="password"
                  name="password"
                  placeholder=" "
                  className="block w-full appearance-none focus:outline-none bg-transparent"
                />
                <label
                  htmlFor="password"
                  className="absolute top-0 -z-1 duration-300 origin-0"
                >
                  Password
                </label>
              </div>
            </div>

            <div className="flex items-center justify-center">
              <button className="btn btn-primary" type="submit">
                Login
              </button>
            </div>

            <p className="text-center">
              Don't have an account?{" "}
              <Link
                className="text-teal-700 hover:text-teal-500 no-underline"
                to="register"
              >
                Create New.
              </Link>
            </p>
          </form>

          <div className="flex flex-col space-x-4 justify-center items-center mt-6">
            <p className="text-2xl text-teal-600 mb-2">or</p>
            <button className="btn btn-primary">Continue with google</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginIn;
