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
      <About />

      <Products />

      <Reviews />
    </>
  );
};

export default Home;
