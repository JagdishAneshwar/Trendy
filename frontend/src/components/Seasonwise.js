import React, { useContext } from "react";
import clotheContext from "../context/clotheContext";
import { useNavigate } from "react-router-dom";
import "./scss/_seasonwise.scss";


  // Carousel

const Seasonwise = () => {
  const context = useContext(clotheContext);
  const { fromCategory } = context;
  const navigate = useNavigate();
  return (
    <section className="season-section">
      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div
            className="carousel-item active"
            onClick={() => {
              fromCategory(
                { category: "traditional", gender: "", fabric: "" },
                navigate
              );
              
            }}
          >
            <img
              src={require("./img/women/dollar-gill-oH-PNVWykUo-unsplash.jpg")}
              className="d-block w-100"
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>Traditional</h5>
            </div>
          </div>
          <div
            className="carousel-item"
            onClick={() => {
              fromCategory(
                { category: "sports", gender: "", fabric: "" },
                navigate
              );
            }}
          >
            <img
              src={require("./img/men/force-majeure-00tlC0Clfrs-unsplash.jpg")}
              className="d-block w-100"
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block text-black-50">
              <h5>StreetWear</h5>
            </div>
          </div>
          <div
            className="carousel-item"
            onClick={() => {
              fromCategory(
                { category: "sports", gender: "", fabric: "jeans" },
                navigate
              );
            }}
          >
            <img
              src={require("./img/kids/pexels-anna-shvets-5325710.jpg")}
              className="carousel-img d-block w-100"
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block text-black-50">
              <h5>Jeans</h5>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </section>
  );
};

export default Seasonwise;
