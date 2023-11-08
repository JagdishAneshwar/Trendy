import React, { useContext, useEffect, createRef } from "react";
import "./scss/_offer.scss";
// import Horizontaloffer from "./Sticky";
import clotheContext from "../context/clotheContext";
import { useNavigate } from "react-router-dom";

// feature

const Offer = () => {
  const context = useContext(clotheContext);
  const { clothes, getClothes, toComponentB } = context;
  const navigate = useNavigate();
  useEffect(() => {
    getClothes();
    // eslint-disable-next-line
  });

  const image = createRef();
  const slider = (val) => {
    if (val < 0) {
      image.current.scrollLeft -= 500;
    } else {
      image.current.scrollLeft += 500;
    }
  };

  console.log(clothes)

  return (
    <section className="offer-section" data-scroll-section>
      <div className="line-1"></div>
      <div className="line-2"></div>
      <button className="left btn-slider" onClick={() => slider(-1)}>
        <span className="slider-icon">&#10092;</span>
      </button>
      <button className="right btn-slider" onClick={() => slider(1)}>
        <span className="slider-icon">&#10093;</span>
      </button>
      <p className="text-center featured-title">Featured</p>

      <div className="featured-imgs-wrapper">
        <div className="featured-imgs" id="slider" ref={image}>
          {clothes.map((clothe) => {
            return (
              <div
                className="featured-img"
                key={clothe._id}
                onClick={() => {
                  toComponentB(clothe, navigate);
                }}
              >
                  <div
                    style={{backgroundImage: `url(${clothe.image})`}}   
                    className="featured-card-img-top"
                    alt="..."
                  ></div>
                  <div className="featured-card-body">
                    <div className="featured-card-wrapper">
                      <h2 className="featured-brand-name">
                        {clothe.title}
                      </h2>
                      <p className="featured-card-text text-truncate">
                        {clothe.description}
                      </p>
                    </div>
                  </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Offer;
