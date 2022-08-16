import React, { useContext, useEffect, createRef } from "react";
import "./scss/_offer.scss";
// import Horizontaloffer from "./Sticky";
import clotheContext from "../context/clotheContext";
import { Link, useNavigate } from "react-router-dom";

const Offer = () => {
  const context = useContext(clotheContext);
  const { clothes, getClothes, toComponentB } = context;
  const navigate = useNavigate();
  useEffect(() => {
    getClothes();
    // eslint-disable-next-line
  }, []);

  const image = createRef();
  const slider = (val) => {
    if (val < 0) {
      image.current.scrollLeft -= 500;
    } else {
      image.current.scrollLeft += 500;
    }
  };

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

      <div className="special">
        <div className="offer-imgs" id="slider" ref={image}>
          {clothes.map((clothe) => {
            return (
              <div
                className="offer-img"
                key={clothe._id}
                onClick={() => {
                  toComponentB(clothe, navigate);
                }}
              >
                <div className="offer-img-wrapper">
                  <img src={require(`${clothe.image}`)} alt="" id="hor-img" />
                </div>
                <div className="offer-text w-100 text-center justify-content-center">
                  <h3 className="offer-title">{clothe.title}</h3>
                  <h3 className="offer-description">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Voluptates quas nobis ducimus odit assumenda in cupiditate
                    adipisci repudiandae, iste officia deleniti. Dolores
                    mollitia harum inventore quae explicabo laboriosam fuga.
                    Nemo.
                  </h3>
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
