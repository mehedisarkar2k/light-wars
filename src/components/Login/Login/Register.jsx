import React from "react";
import { useForm } from "react-hook-form";
import { GrClose } from "react-icons/gr";
import { Link, useHistory } from "react-router-dom";

const Register = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);
  const history = useHistory();

  return (
    <div className="bg-teal-50">
      <div className="flex items-center justify-center min-h-screen">
        <div className="max-w-lg mx-auto rounded-lg shadow-xl overflow-hidden py-10 px-20 bg bg-white relative">
          <div
            onClick={() => history.push("/")}
            className="absolute top-2 left-0 btn px-4 animate-bounce "
          >
            <GrClose size="1.5em" />
          </div>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="">
              <h2 className="text-teal-700 text-2xl font-bold text-center">
                Register
              </h2>
              <p className="text-teal-600 text-center ">Happy to have you!</p>
            </div>

            <div className="grid grid-cols-6 gap-6 space-y-2">
              <div className="col-span-6 md:col-span-3 relative border-b-2 focus-within:border-teal-700">
                <input
                  required
                  {...register("fName")}
                  id="fName"
                  type="text"
                  name="fName"
                  placeholder=" "
                  className="block w-full appearance-none focus:outline-none bg-transparent"
                />
                <label
                  htmlFor="fName"
                  className="absolute top-0 -z-1 duration-300 origin-0"
                >
                  First Name
                </label>
              </div>
              <div className="col-span-6 md:col-span-3 relative border-b-2 focus-within:border-teal-700">
                <input
                  required
                  {...register("lName")}
                  id="lName"
                  type="text"
                  name="lName"
                  placeholder=" "
                  className="block w-full appearance-none focus:outline-none bg-transparent"
                />
                <label
                  htmlFor="lName"
                  className="absolute top-0 -z-1 duration-300 origin-0"
                >
                  Last Name
                </label>
              </div>

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
                Register
              </button>
            </div>

            <p className="text-center">
              Already registered?{" "}
              <Link
                className="text-teal-700 hover:text-teal-500 no-underline"
                to="login"
              >
                Login Here.
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
