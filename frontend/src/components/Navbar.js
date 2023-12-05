import React from "react";
import "./scss/_navbar.scss";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  let history = useNavigate();
  const handleLogOut = () => {
    localStorage.removeItem("token");
    history("/login");
  };
  window.addEventListener("beforeunload", (ev) => {
    ev.preventDefault();
    localStorage.removeItem("token");
    history("/login");
  });
  return (
    <div className="nav-bar-wrapper">
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="nav-start" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                {!localStorage.getItem("token") ? (
                  ""
                ) : (
                  <Link
                    className="nav-link active"
                    aria-current="page"
                    to="/home"
                  >
                    HOME
                  </Link>
                )}
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  aria-current="page"
                  to="/clothes"
                >
                  SHOP
                </Link>
              </li>
            </ul>
          </div>
          <Link className="navbar-brand-name" to="/home">
            TRENDY
          </Link>
          <div className="nav-end">
            <ul className="navbar-nav">
              {!localStorage.getItem("token") ? (
                <form className="d-flex" >
                  <li className="nav-item">
                    <Link className="login nav-link" to="/login">
                      LogIn
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="signup nav-link" to="/signup">
                      Signup
                    </Link>
                  </li>
                </form>
              ) : (
                <>
                  <li className="nav-item">
                    <Link className="cart-nav nav-link" to="/cart">
                      Cart
                    </Link>
                  </li>
                  <li className="nav-item">
                    <button className="nav-link logout" onClick={handleLogOut}>
                      Logout
                    </button>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
