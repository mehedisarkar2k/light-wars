import React from "react";
import Nav from "../../Shared/Nav/Nav";
import About from "./About/About";
import Banner from "./Banner/Banner";
import Categories from "./Categories/Categories";
import Products from "./Products/Products";

const Home = () => {
  return (
    <>
      <Nav />
      <Banner />
      <Categories />
      <About />

      <Products />
    </>
  );
};

export default Home;
