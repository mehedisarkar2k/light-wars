import React from "react";
import show from "../.../../../../../images/show.jpeg";

const About = ({ children }) => {
  return (
    <div className="bg-gray-50">
      <div className="my-container">
        <div className="grid items-center grid-cols-1 md:grid-cols-2">
          <div className="p-10">
            <h3 className="text-5xl py-2 text-gray-800 font-grandHotel">
              What's Lightwars
            </h3>
            <p className="text-gray-700">
              Lunettes Eye-wear offers a variety of Sunglasses and eyeglass
              frames within an affordable price range. in Bangladesh. Anti-Blue
              glasses, Polarized.
            </p>
          </div>
          <div className="p-10">
            <div className="w-full overflow-hidden rounded-lg">
              <img
                className="w-full h-full object-cover transform transition hover:scale-110"
                src={show}
                alt=""
              />
            </div>
          </div>
        </div>

        <div className="">{children}</div>
      </div>
    </div>
  );
};

export default About;
