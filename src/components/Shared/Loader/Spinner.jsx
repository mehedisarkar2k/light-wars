import React from "react";
import Loader from "react-loader-spinner";
import BannerBG from "../../../images/main-banner-bg.jpg";

const Spinner = () => {
  return (
    <div
      style={{
        background: `linear-gradient(rgba(0,0,0,.5),rgba(0,0,0,.5)),url(${BannerBG}) center center/cover fixed no-repeat`,
      }}
      className="flex items-center justify-center min-h-screen -mt-10 text-center"
    >
      <Loader type="Puff" color="#00BFFF" height={100} width={100} />
    </div>
  );
};

export default Spinner;
