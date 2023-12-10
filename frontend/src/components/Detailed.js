import React, { useContext, useEffect, useRef } from "react";
import Magnifier from "./magnifier";
import Event from "./event";
import { useLocation, useNavigate } from "react-router-dom";
import clotheContext from "../context/clotheContext";
import Footer from './Footer';
import "./magnifier.css";
import "./scss/_detailed.scss";

// Initialize Event and Magnifier instances outside the component
const evt = new Event();
const m = new Magnifier(evt);

const Detailed = () => {
  const thumb = useRef(null);

  const location = useLocation();
  const navigate = useNavigate();
  const context = useContext(clotheContext);
  const { addBoughtInfo } = context;
  const { id, image, brand, description, price, title, discount } = location.state;

  var quantity = 0;

  useEffect(() => {
    window.scrollTo(0, 0);

    // Ensure thumb.current is not null before attaching the magnifier
    if (thumb.current) {
      m.attach({
        thumb: `#${thumb.current.id}`,
        large: image,
        largeWrapper: "preview",
        mode: 'inside',
        zoom: 3,
        zoomable: true
      });
    }
  }, [image]); // Include 'image' in the dependency array to react to changes in the 'image' prop

  const increment = () => {
    quantity++;
    return quantity;
  };

  return (
    <>
      <section className="product-details" data-scroll-section id="hello">
        <div className="details">
        <div className="magnify-main-wrapper preview">
          <div className="magnifier-thumb-wrapper demo">
            <img
              className="detailed-img"
              id="thumb"
              ref={thumb}
              data-large-img-url={image}
              data-large-img-wrapper="preview"
              src={image}
              alt="..."
            />
            {/* <div className="magnifier-preview example heading" id="preview" style={{ width: "200px", height: "133px" }}>
              
            </div> */}
          </div>
          </div>
          <div className="info">
            <div className="card-body info-body">
              <h5 className="brand-name">{brand}</h5>
              <h4 className="detail-product-title">{title}</h4>
              <h6 className="detail-price">
                <span>
                  ₹{price}
                  <span className="detail-stroke-text">
                    ₹{(price * 100) / discount}
                  </span>
                </span>
                <span className="detail-offer">{discount}% off</span>
              </h6>

              <div className="product-detail">
                <h4>Description</h4>
                <p className="product-description">{description}</p>
                <div className="hr w-100"></div>
                <div class="accordion-item">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOne"
                    aria-expanded="false"
                    aria-controls="collapseOne"
                    onClick={(e) => {
    e.preventDefault(); 
  }}
                  >
                    <h2>Product Details</h2>
                  </button>
                  <div
                    id="collapseOne"
                    class="accordion-collapse collapse"
                    aria-labelledby="headingOne"
                    data-bs-parent="accordion-item"
                  >
                    <div class="accordion-body">
                      <table className="table">
                        <tbody>
                          <tr>
                            <td>Country of origin</td>
                            <td>India</td>
                          </tr>
                          <tr>
                            <td>Type</td>
                            <td>Hoode Neck</td>
                          </tr>
                          <tr>
                            <td>Sleeve</td>
                            <td>Half Sleeve</td>
                          </tr>
                          <tr>
                            <td>Fit</td>
                            <td>Loose</td>
                          </tr>
                          <tr>
                            <td>Fabric</td>
                            <td>Cotton Blend</td>
                          </tr>
                          <tr>
                            <td>Sales Package</td>
                            <td>Pack Of 1</td>
                          </tr>
                          <tr>
                            <td>Pack of</td>
                            <td>1</td>
                          </tr>
                          <tr>
                            <td>Style Code</td>
                            <td>T339HS-BLYL-NEW</td>
                          </tr>
                          <tr>
                            <td>Neck Type</td>
                            <td>Hooded Neck</td>
                          </tr>
                          <tr>
                            <td>Ideal For</td>
                            <td>Men</td>
                          </tr>
                          <tr>
                            <td>Size</td>
                            <td>S</td>
                          </tr>
                          <tr>
                            <td>Suitable For</td>
                            <td>Western Wear</td>
                          </tr>
                          <tr>
                            <td>Sleeve Type</td>
                            <td>Wide</td>
                          </tr>
                          <tr>
                            <td>Reversible</td>
                            <td>No</td>
                          </tr>
                          <tr>
                            <td>Fabric Care</td>
                            <td>Gentle Machine Wash</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
              <button
                className="btn btn-primary buy-btn"
                onClick={() => {
                  addBoughtInfo(
                    id,
                    image,
                    title,
                    price,
                    discount,
                    "buy",
                    increment(),
                    navigate
                  );
                }}
              >
                BUY
              </button>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Detailed;
