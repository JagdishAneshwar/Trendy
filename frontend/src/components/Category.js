import "./scss/_category.scss";
import React, { useContext } from "react";
import clotheContext from "../context/clotheContext";
import { useNavigate } from "react-router-dom";

const Category = () => {
  const context = useContext(clotheContext);
  const { fromCategory } = context;
  const navigate = useNavigate();

  return (
    <section className="category-section" data-scroll-section>
      <div>
        <h2 className="title-category">Category</h2>

        <div className="draw"></div>

        <div className="categories">
          <div
            className="category"
            onClick={() => {
              fromCategory({ gender: "M", category: "", fabric: "" }, navigate);
            }}
          >
            <h3 className="category-caption">MEN</h3>
            <img
              src={require("./img/men/Dark_Brown_Soho_Trousers-removebg-preview.png")}
              alt="Clothe"
              className="img img1"
            />
          </div>
          <div
            className="category"
            onClick={() => {
              fromCategory({ gender: "F", category: "", fabric: "" }, navigate);
            }}
          >
            <h3 className="category-caption">WOMEN</h3>
            <img
              src={require("./img/women/women-7.png")}
              alt="Clothe"
              className="img img2"
            />
          </div>
          <div
            className="category"
            onClick={() => {
              fromCategory({ gender: "K", category: "", fabric: "" }, navigate);
            }}
          >
            <h3 className="category-caption">KIDS</h3>
            <img
              src={require("./img/kids/kids-5.png")}
              alt="Clothe"
              className="img img3"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Category;
