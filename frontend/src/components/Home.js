import React from "react";
import "./scss/_home.scss";
import Video from "./Video";
import Category from "./Category";
import Offer from "./Offer";
import Seasonwise from "./Seasonwise";

const Home = () => {
  return (
    <>
      <Video />
      <Category />
      <Seasonwise />
      <Offer />
    </>
  );
};

export default Home;
