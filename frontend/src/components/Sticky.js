import React from "react";
import "./scss/_sticky.scss";
const Sticky = () => {
  return (
    <div className="sp-col-img">
      <div className="wrapper-img">
        <img
          src={require("./img/offer/women (6) 1.png")}
          alt="Special clothes"
          className="sp-img"
          data-scroll
          data-scroll-sticky
          data-scroll-target="#gallery"
          data-scroll-speed="2"
        />
      </div>
    </div>
  );
};

export default Sticky;
