import React from "react";
import { useHistory } from "react-router";
import { useEffect } from "react/cjs/react.development";
import Footer from "../../Shared/Footer/Footer";
import Nav from "../../Shared/Nav/Nav";
import About from "../Home/About/About";
import Reviews from "../Home/Reviews/Reviews";
import AboutUsBanner from "./AboutUsBanner";

const AboutUs = () => {
  const history = useHistory();
  const goTOExplore = () => {
    history.push("/explore");
  };

  useEffect(() => {
    document.title = "About Us | Lightwars";
  }, []);

  return (
    <div>
      <Nav />

      <AboutUsBanner />

      <About>
        <div className="flex items-center justify-center">
          <button onClick={goTOExplore} className="btn btn-primary">
            Explore
          </button>
        </div>
      </About>

      <Reviews />
      <Footer />
    </div>
  );
};

export default AboutUs;
