import "./_App.scss";
import React, { useRef, useEffect } from "react";
import Home from "./components/Home";
import Cart from "./components/Cart";
import Featured from "./components/Featured";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Navbar from "./components/Navbar";
import Detailed from "./components/Detailed";
import Default from "./components/Default";
// import LocomotiveScroll from "locomotive-scroll";
// import "./components/scss/_locomotive-scroll.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ClotheState from "./context/ClotheState";

function App() {
  // const refSmoothScoll = useRef(null);

  // useEffect(() => {
  //   const el = refSmoothScoll.current;
  //   // eslint-disable-next-line
  //   const scroll = new LocomotiveScroll({
  //     el: el,
  //     smooth: true,
  //     multiplier: 1,
  //     lerp: 0.08,
  //   });
  // });

  return (
    <>
      <ClotheState>
        <div className="smoother">
          <Router>
             <Navbar /> 
            <Routes>
              <Route exact path="/signup" element={<Signup />} />
              <Route exact path="/" element={<Login />} />
              <Route exact path="/login" element={<Login />} />
              <Route exact path="/home" element={<Home />} />
              <Route exact path="/magnify" element={<Default/>} />
              <Route exact path="/clothes" element={<Featured />} />
              <Route exact path="/featured" element={<Featured />} />
              <Route path="/product-details" element={<Detailed />} />
              <Route path="/cart" element={<Cart />} />
            </Routes>
          </Router>
        </div>
      </ClotheState>
    </>
  );
}

export default App;
