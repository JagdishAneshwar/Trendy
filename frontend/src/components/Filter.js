import React, { useContext, useEffect, useState } from "react";
import './scss/_filter.scss'
import { useNavigate } from "react-router-dom";
import clotheContext from "../context/clotheContext";

export default function Filter() {
    const context = useContext(clotheContext);
    const { clothes, toComponentB, fromCategory, filters } = context;
    const localdata = clothes.filter((clothe) => {
        return (
          clothe.gender === filters.gender ||
          clothe.category === filters.category ||
          clothe.fabric === filters.fabric ||
          clothe.rating === filters.rating ||
          clothe.size === filters.size ||
          clothe.color === filters.color ||
          clothe.discount === filters.discount
        );
      });
    useEffect(() => {
        if (!localStorage.getItem("arraydata")) {
          localStorage.setItem("arraydata", localdata);
        }
        window.scrollTo(0, 0);
      }, [localdata]);
      const navigate = useNavigate();


  return (
    <>
    <div className="filter-wrapper desktop-filter">
    <div className="filter">
    <h2 className="products-title">Results</h2>
    <div className="accordion" id="accordionExample">
      {/* gender */}
      <div className="accordion-item">
        <h2 className="accordion-header" id="headingOne">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseOne"
            aria-expanded="false"
            aria-controls="collapseOne"
          >
            Gender
          </button>
        </h2>
        <div
          id="collapseOne"
          className="accordion-collapse collapse"
          aria-labelledby="headingOne"
        >
          <div className="accordion-body">
            <div className="btn-group-vertical">
              <button
                type="button"
                className="btn btn-light btn-lg"
                onClick={() => {
                  fromCategory({ gender: "M" }, navigate);
                }}
              >
                Men
              </button>
              <button
                type="button"
                className="btn btn-light btn-lg"
                onClick={() => {
                  fromCategory({ gender: "F" }, navigate);
                }}
              >
                Women
              </button>
              <button
                type="button"
                className="btn btn-light btn-lg"
                onClick={() => {
                  fromCategory({ gender: "K" }, navigate);
                }}
              >
                Kids
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* customer rating */}
      <div className="accordion-item">
        <h2 className="accordion-header" id="headingOne">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseTwo"
            aria-expanded="false"
            aria-controls="collapseTwo"
          >
            Rating
          </button>
        </h2>
        <div
          id="collapseTwo"
          className="accordion-collapse collapse"
          aria-labelledby="headingOne"
        >
          <div className="accordion-body">
            <div className="btn-group-vertical">
              <button
                type="radio"
                className="btn btn-light btn-lg"
                onClick={() => {
                  fromCategory({ rating: 1 }, navigate);
                }}
              >
                1
              </button>
              <button
                type="radio"
                className="btn btn-light btn-lg"
                onClick={() => {
                  fromCategory({ rating: 2 }, navigate);
                }}
              >
                2
              </button>
              <button
                type="radio"
                className="btn btn-light btn-lg"
                onClick={() => {
                  fromCategory({ rating: 3 }, navigate);
                }}
              >
                3
              </button>
              <button
                type="radio"
                className="btn btn-light btn-lg"
                onClick={() => {
                  fromCategory({ rating: 4 }, navigate);
                }}
              >
                4
              </button>
              <button
                type="radio"
                className="btn btn-light btn-lg"
                onClick={() => {
                  fromCategory({ rating: 5 }, navigate);
                }}
              >
                5
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* category */}
      <div className="accordion-item">
        <h2 className="accordion-header" id="headingOne">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseThree"
            aria-expanded="false"
            aria-controls="collapseThree"
          >
            Category
          </button>
        </h2>
        <div
          id="collapseThree"
          className="accordion-collapse collapse"
          aria-labelledby="headingThree"
        >
          <div className="accordion-body">
            <div className="btn-group-vertical">
              <button
                type="button"
                className="btn btn-light btn-lg"
                onClick={() => {
                  fromCategory({ category: "casual" }, navigate);
                }}
              >
                Casual
              </button>
              <button
                type="button"
                className="btn btn-light btn-lg"
                onClick={() => {
                  fromCategory({ category: "traditional" }, navigate);
                }}
              >
                Traditional
              </button>
              <button
                type="button"
                className="btn btn-light btn-lg"
                onClick={() => {
                  fromCategory({ category: "sports" }, navigate);
                }}
              >
                SportsWear
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* fabric */}
      <div className="accordion-item">
        <h2 className="accordion-header" id="headingOne">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#Fabric"
            aria-expanded="false"
            aria-controls="Fabric"
          >
            Fabric
          </button>
        </h2>
        <div
          id="Fabric"
          className="accordion-collapse collapse"
          aria-labelledby="headingThree"
        >
          <div className="accordion-body">
            <div className="btn-group-vertical">
              <button
                type="button"
                className="btn btn-light btn-lg"
                onClick={() => {
                  fromCategory({ fabric: "jeans" }, navigate);
                }}
              >
                Jeans
              </button>
              <button
                type="button"
                className="btn btn-light btn-lg"
                onClick={() => {
                  fromCategory({ fabric: "cotton" }, navigate);
                }}
              >
                Cotton
              </button>
              <button
                type="button"
                className="btn btn-light btn-lg"
                onClick={() => {
                  fromCategory({ fabric: "silk" }, navigate);
                }}
              >
                Silk
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Size */}
      <div className="accordion-item">
        <h2 className="accordion-header" id="headingOne">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#Size"
            aria-expanded="false"
            aria-controls="Size"
          >
            Size
          </button>
        </h2>
        <div
          id="Size"
          className="accordion-collapse collapse"
          aria-labelledby="headingThree"
        >
          <div className="accordion-body">
            <div className="btn-group-vertical">
              <button
                type="button"
                className="btn btn-light btn-lg"
                onClick={() => {
                  fromCategory({ size: "XL" }, navigate);
                }}
              >
                XL
              </button>
              <button
                type="button"
                className="btn btn-light btn-lg"
                onClick={() => {
                  fromCategory({ size: "L" }, navigate);
                }}
              >
                L
              </button>
              <button
                type="button"
                className="btn btn-light btn-lg"
                onClick={() => {
                  fromCategory({ size: "S" }, navigate);
                }}
              >
                S
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Color */}
      <div className="accordion-item">
        <h2 className="accordion-header" id="headingOne">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#Color"
            aria-expanded="false"
            aria-controls="Color"
          >
            Color
          </button>
        </h2>
        <div
          id="Color"
          className="accordion-collapse collapse"
          aria-labelledby="headingThree"
        >
          <div className="accordion-body">
            <div className="btn-group-vertical">
              <button
                type="button"
                className="btn btn-light btn-lg"
                onClick={() => {
                  fromCategory({ color: "green" }, navigate);
                }}
              >
                Green
              </button>
              <button
                type="button"
                className="btn btn-light btn-lg"
                onClick={() => {
                  fromCategory({ color: "red" }, navigate);
                }}
              >
                Red
              </button>
              <button
                type="button"
                className="btn btn-light btn-lg"
                onClick={() => {
                  fromCategory({ color: "black" }, navigate);
                }}
              >
                Black
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Discount */}
      <div className="accordion-item">
        <h2 className="accordion-header" id="headingOne">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#Discount"
            aria-expanded="false"
            aria-controls="Discount"
          >
            Discount
          </button>
        </h2>
        <div
          id="Discount"
          className="accordion-collapse collapse"
          aria-labelledby="headingThree"
        >
          <div className="accordion-body">
            <div className="btn-group-vertical">
              <button
                type="button"
                className="btn btn-light btn-lg"
                onClick={() => {
                  fromCategory({ discount: 80 }, navigate);
                }}
              >
                80%
              </button>
              <button
                type="button"
                className="btn btn-light btn-lg"
                onClick={() => {
                  fromCategory({ discount: 50 }, navigate);
                }}
              >
                50%
              </button>
              <button
                type="button"
                className="btn btn-light btn-lg"
                onClick={() => {
                  fromCategory({ discount: 40 }, navigate);
                }}
              >
                40%
              </button>
              <button
                type="button"
                className="btn btn-light btn-lg"
                onClick={() => {
                  fromCategory({ discount: 10 }, navigate);
                }}
              >
                10%
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div></div>
  <button className="filterButton"  type="button" data-bs-toggle="offcanvas" data-bs-target="#filterCanvas" aria-controls="offcanvasScrolling">Filter</button>
  <div className="filter mobile-filter offcanvas offcanvas-start" data-bs-scroll="true" data-bs-backdrop="false" tabindex="-1" id="filterCanvas" aria-labelledby="offcanvasScrollingLabel" >
  <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
    <h2 className="products-title">Results</h2>
    <div className="accordion" id="accordionExample">
      {/* gender */}
      <div className="accordion-item">
        <h2 className="accordion-header" id="headingOne">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseOne"
            aria-expanded="false"
            aria-controls="collapseOne"
          >
            Gender
          </button>
        </h2>
        <div
          id="collapseOne"
          className="accordion-collapse collapse"
          aria-labelledby="headingOne"
        >
          <div className="accordion-body">
            <div className="btn-group-vertical">
              <button
                type="button"
                className="btn btn-light btn-lg"
                onClick={() => {
                  fromCategory({ gender: "M" }, navigate);
                }}
              >
                Men
              </button>
              <button
                type="button"
                className="btn btn-light btn-lg"
                onClick={() => {
                  fromCategory({ gender: "F" }, navigate);
                }}
              >
                Women
              </button>
              <button
                type="button"
                className="btn btn-light btn-lg"
                onClick={() => {
                  fromCategory({ gender: "K" }, navigate);
                }}
              >
                Kids
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* customer rating */}
      <div className="accordion-item">
        <h2 className="accordion-header" id="headingOne">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseTwo"
            aria-expanded="false"
            aria-controls="collapseTwo"
          >
            Rating
          </button>
        </h2>
        <div
          id="collapseTwo"
          className="accordion-collapse collapse"
          aria-labelledby="headingOne"
        >
          <div className="accordion-body">
            <div className="btn-group-vertical">
              <button
                type="radio"
                className="btn btn-light btn-lg"
                onClick={() => {
                  fromCategory({ rating: 1 }, navigate);
                }}
              >
                1
              </button>
              <button
                type="radio"
                className="btn btn-light btn-lg"
                onClick={() => {
                  fromCategory({ rating: 2 }, navigate);
                }}
              >
                2
              </button>
              <button
                type="radio"
                className="btn btn-light btn-lg"
                onClick={() => {
                  fromCategory({ rating: 3 }, navigate);
                }}
              >
                3
              </button>
              <button
                type="radio"
                className="btn btn-light btn-lg"
                onClick={() => {
                  fromCategory({ rating: 4 }, navigate);
                }}
              >
                4
              </button>
              <button
                type="radio"
                className="btn btn-light btn-lg"
                onClick={() => {
                  fromCategory({ rating: 5 }, navigate);
                }}
              >
                5
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* category */}
      <div className="accordion-item">
        <h2 className="accordion-header" id="headingOne">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseThree"
            aria-expanded="false"
            aria-controls="collapseThree"
          >
            Category
          </button>
        </h2>
        <div
          id="collapseThree"
          className="accordion-collapse collapse"
          aria-labelledby="headingThree"
        >
          <div className="accordion-body">
            <div className="btn-group-vertical">
              <button
                type="button"
                className="btn btn-light btn-lg"
                onClick={() => {
                  fromCategory({ category: "casual" }, navigate);
                }}
              >
                Casual
              </button>
              <button
                type="button"
                className="btn btn-light btn-lg"
                onClick={() => {
                  fromCategory({ category: "traditional" }, navigate);
                }}
              >
                Traditional
              </button>
              <button
                type="button"
                className="btn btn-light btn-lg"
                onClick={() => {
                  fromCategory({ category: "sports" }, navigate);
                }}
              >
                SportsWear
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* fabric */}
      <div className="accordion-item">
        <h2 className="accordion-header" id="headingOne">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#Fabric"
            aria-expanded="false"
            aria-controls="Fabric"
          >
            Fabric
          </button>
        </h2>
        <div
          id="Fabric"
          className="accordion-collapse collapse"
          aria-labelledby="headingThree"
        >
          <div className="accordion-body">
            <div className="btn-group-vertical">
              <button
                type="button"
                className="btn btn-light btn-lg"
                onClick={() => {
                  fromCategory({ fabric: "jeans" }, navigate);
                }}
              >
                Jeans
              </button>
              <button
                type="button"
                className="btn btn-light btn-lg"
                onClick={() => {
                  fromCategory({ fabric: "cotton" }, navigate);
                }}
              >
                Cotton
              </button>
              <button
                type="button"
                className="btn btn-light btn-lg"
                onClick={() => {
                  fromCategory({ fabric: "silk" }, navigate);
                }}
              >
                Silk
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Size */}
      <div className="accordion-item">
        <h2 className="accordion-header" id="headingOne">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#Size"
            aria-expanded="false"
            aria-controls="Size"
          >
            Size
          </button>
        </h2>
        <div
          id="Size"
          className="accordion-collapse collapse"
          aria-labelledby="headingThree"
        >
          <div className="accordion-body">
            <div className="btn-group-vertical">
              <button
                type="button"
                className="btn btn-light btn-lg"
                onClick={() => {
                  fromCategory({ size: "XL" }, navigate);
                }}
              >
                XL
              </button>
              <button
                type="button"
                className="btn btn-light btn-lg"
                onClick={() => {
                  fromCategory({ size: "L" }, navigate);
                }}
              >
                L
              </button>
              <button
                type="button"
                className="btn btn-light btn-lg"
                onClick={() => {
                  fromCategory({ size: "S" }, navigate);
                }}
              >
                S
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Color */}
      <div className="accordion-item">
        <h2 className="accordion-header" id="headingOne">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#Color"
            aria-expanded="false"
            aria-controls="Color"
          >
            Color
          </button>
        </h2>
        <div
          id="Color"
          className="accordion-collapse collapse"
          aria-labelledby="headingThree"
        >
          <div className="accordion-body">
            <div className="btn-group-vertical">
              <button
                type="button"
                className="btn btn-light btn-lg"
                onClick={() => {
                  fromCategory({ color: "green" }, navigate);
                }}
              >
                Green
              </button>
              <button
                type="button"
                className="btn btn-light btn-lg"
                onClick={() => {
                  fromCategory({ color: "red" }, navigate);
                }}
              >
                Red
              </button>
              <button
                type="button"
                className="btn btn-light btn-lg"
                onClick={() => {
                  fromCategory({ color: "black" }, navigate);
                }}
              >
                Black
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Discount */}
      <div className="accordion-item">
        <h2 className="accordion-header" id="headingOne">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#Discount"
            aria-expanded="false"
            aria-controls="Discount"
          >
            Discount
          </button>
        </h2>
        <div
          id="Discount"
          className="accordion-collapse collapse"
          aria-labelledby="headingThree"
        >
          <div className="accordion-body">
            <div className="btn-group-vertical">
              <button
                type="button"
                className="btn btn-light btn-lg"
                onClick={() => {
                  fromCategory({ discount: 80 }, navigate);
                }}
              >
                80%
              </button>
              <button
                type="button"
                className="btn btn-light btn-lg"
                onClick={() => {
                  fromCategory({ discount: 50 }, navigate);
                }}
              >
                50%
              </button>
              <button
                type="button"
                className="btn btn-light btn-lg"
                onClick={() => {
                  fromCategory({ discount: 40 }, navigate);
                }}
              >
                40%
              </button>
              <button
                type="button"
                className="btn btn-light btn-lg"
                onClick={() => {
                  fromCategory({ discount: 10 }, navigate);
                }}
              >
                10%
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</>
    )
}
