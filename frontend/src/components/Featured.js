import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import clotheContext from "../context/clotheContext";
import FeaturedProductCard from './FeaturedProductCard';
import Filter from './Filter';
import "./scss/_featured.scss";

const Featured = () => {
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
    <section className="products-section" data-scroll-section>
    
      <div className="filter-product-parent">
        
        <Filter/>
        
        <div className="row product-list-wrapper">
          {localdata.map((clothe) => {
            
            return (
              <FeaturedProductCard id={clothe._id} clothe={clothe} navigate={navigate} img={clothe.image} brand={clothe.brand} rating={clothe.rating} category={clothe.category} fabric={clothe.fabric} discount={clothe.discount} description={clothe.description} toComponentB={toComponentB}  />
            );
          })}
        </div>
      </div>
      
    </section>
    </>
  );
};

export default Featured;
