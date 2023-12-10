import React from 'react';
import './scss/_fetauredproductcard.scss';

export default function FeaturedProductCard({ id, clothe, navigate, img, brand, toComponentB, rating, category, fabric, discount, description }) {
  return (
    <div className="product-wrapper" key={id}>
      <div
        className="filtered-product"
        onClick={() => {
          toComponentB(clothe, navigate);
        }}
      >
        <div
          style={{ backgroundImage: `url(${img})` }}
          className="card-img-top"
          alt="..."
        ></div>
        <div className="card-body">
          <div className="card-wrapper">
            <h5 className="brand-name">
              {brand}
              {rating}
            </h5>
            <h6 className="price">
              <span>
                Price: <b>₹500</b>
                {category}
                {fabric}
                <span className="stroke-text">₹800</span>
              </span>
              <span className="offer">{discount}% off</span>
            </h6>
            <p className="card-text text-truncate">
              {description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
