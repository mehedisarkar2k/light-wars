import { Transition } from "@headlessui/react";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../../../images/logo.png";

function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const [windowHeight, setWindowHeight] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setWindowHeight(window.scrollY > 200);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    // <div className="fixed top-0 left-0 w-screen">
    <div className="w-full">
      <nav
        className={`px-10 sm:px-0 lg:px-10 py-2 md:py-4 lg:py-2 ${
          windowHeight && "shadow-md fixed top-0 w-full bg-white"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center w-full">
              <NavLink to="/">
                <div className="flex-shrink-0 flex items-center space-x-4">
                  <img className="w-10 h-auto" src={Logo} alt="" />
                  <h2 className="text-red-500 text-2xl sm:text-xl lg:text-3xl font-bold font-grandHotel">
                    Light Wars
                  </h2>
                </div>
              </NavLink>
              <div className="ml-auto hidden md:block">
                <div className="ml-10 flex items-center space-x-2">
                  <NavLink
                    activeClassName="text-teal-600 font-bold"
                    to="/home"
                    className="text-lg tracking-wide px-3 py-1 rounded-3xl text-gray-700"
                  >
                    Home
                  </NavLink>

                  <NavLink
                    activeClassName="text-teal-600 font-bold"
                    to="/explore"
                    className="text-lg tracking-wide px-3 py-1 rounded-3xl text-gray-700"
                  >
                    Explore
                  </NavLink>

                  <NavLink
                    activeClassName="text-teal-600 font-bold"
                    to="/dashboard"
                    className="text-lg tracking-wide px-3 py-1 rounded-3xl text-gray-700"
                  >
                    Dashboard
                  </NavLink>

                  <NavLink
                    activeClassName="text-teal-600 font-bold"
                    to="/about"
                    className="text-lg tracking-wide px-3 py-1 rounded-3xl text-gray-700"
                  >
                    About Us
                  </NavLink>

                  <NavLink className="flex-shrink-0 block" to="login">
                    <button className="btn btn-primary text-lg rounded-full py-1">
                      Log In
                    </button>
                  </NavLink>
                </div>
              </div>
            </div>
            <div className="-mr-2 flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {(ref) => (
            <div className="text-center md:hidden" id="mobile-menu">
              <div
                ref-setter={ref}
                className="px-2 pt-2 pb-3 space-y-1 sm:px-3"
              >
                <NavLink
                  activeClassName="text-teal-600 font-bold"
                  to="/home"
                  className="block text-lg tracking-wide px-3 py-1 rounded-3xl text-gray-700"
                >
                  Home
                </NavLink>

                <NavLink
                  activeClassName="text-teal-600 font-bold"
                  to="/explore"
                  className="block text-lg tracking-wide px-3 py-1 rounded-3xl text-gray-700"
                >
                  Explore
                </NavLink>

                <NavLink
                  activeClassName="text-teal-600 font-bold"
                  to="/dashboard"
                  className="block text-lg tracking-wide px-3 py-1 rounded-3xl text-gray-700"
                >
                  Dashboard
                </NavLink>

                <NavLink
                  activeClassName="text-teal-600 font-bold"
                  to="/about"
                  className="block text-lg tracking-wide px-3 py-1 rounded-3xl text-gray-700"
                >
                  About Us
                </NavLink>

                <NavLink className="block" to="login">
                  <button className="btn btn-primary text-lg rounded-full py-1">
                    Log In
                  </button>
                </NavLink>
              </div>
            </div>
          )}
        </Transition>
      </nav>
    </div>
  );
}

export default Nav;
