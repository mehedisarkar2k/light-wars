import React from "react";
import Nav from "../../Shared/Nav/Nav";
import About from "./About/About";
import Banner from "./Banner/Banner";
import Categories from "./Categories/Categories";
import Products from "./Products/Products";
import Reviews from "./Reviews/Reviews";

const Home = () => {
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
    </>
  );
};

export default Home;
