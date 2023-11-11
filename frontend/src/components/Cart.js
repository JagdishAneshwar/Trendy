import React, { useContext, useEffect, useState } from "react";
import "./scss/_cart.scss";
import Context from "../context/clotheContext";

const Cart = () => {
  const context = useContext(Context);

  const { getBoughtsInfo, updateBought, boughts, deleteBought } = context;
  useEffect(() => {
    getBoughtsInfo();
    // eslint-disable-next-line
  }, []);

  const onClickRemoveTask = (_id) => {
    deleteBought(_id);
    console.log(_id);
  };

  const onChange = (e, id) => {
    updateBought(id, e.target.value);
  };

  var total_price = 0;

  return (
    <section className="section cart-section">
      <div className="bought-items">
        {boughts.map((bought) => {
          const { _id, title, image, discount, price, quantity } = bought;
          var sum_price = quantity * price;
          total_price = total_price + sum_price;
          return (
            <div className="product" key={_id}>
              <div
                className="cart-product-img"
                style={{ backgroundImage: `url(${image})` }}
                alt="..."
              ></div>
              <div className="product-info">
                <h1 className="product-name fw-bolder">Title: {title}</h1>
                <h3 className="cart-price">Price: {price}</h3>
                <h4 className="cart-discount">Discount: {discount}</h4>
                <h3 className="product-quantity input-group">
                  Quantity:&nbsp;
                  <input
                    type="number"
                    className="quantity form-control"
                    onChange={(event) => onChange(event, _id)}
                    value={quantity}
                    name="equantity"
                    min="0"
                    aria-label="Quantity"
                    aria-describedby="basic-addon1"
                  />
                </h3>
                <h3>Sum Price: {sum_price}</h3>
                {/* <button
                  type="button"
                  onClick={() => onClickRemoveTask(_id)}  // Pass a function reference
                  className="btn btn-danger"
                >
                  Remove
                </button> */}
              </div>
            </div>
          );
        })}
        <h1 className="total-price">Total Price:&nbsp;{total_price}</h1>
      </div>
    </section>
  );
};

export default Cart;
