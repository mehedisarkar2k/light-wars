import React from "react";
import { useEffect } from "react/cjs/react.development";
import Footer from "../../Shared/Footer/Footer";
import Nav from "../../Shared/Nav/Nav";
import About from "./About/About";
import Banner from "./Banner/Banner";
import Categories from "./Categories/Categories";
import Products from "./Products/Products";
import Reviews from "./Reviews/Reviews";

const Home = () => {
  useEffect(() => {
    document.title = "Home | Lightwars";
  }, []);
  return (
    <>
      <Nav />
      <Banner />
      <Categories />
      <About>
        <div className="flex items-center justify-center">
          <button className="btn btn-primary">About Us</button>
        </div>
      </About>

      <Products />

      <Reviews />
      <Footer />
    </>
  );
};

export default Home;
