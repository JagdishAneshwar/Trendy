import React from "react";
import "./scss/_home.scss";
import Video from "./Video";
import Category from "./Category";
import Offer from "./Offer";
import Seasonwise from "./Seasonwise";
import Footer from './Footer'

const Home = () => {
  return (
    <>
      <Video />
      <Category />
      <Seasonwise />
      <Offer />
      <Footer/>
    </>
  );
};

export default Home;
