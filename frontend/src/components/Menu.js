import React, { useRef, useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import './scss/_menu.scss';

export default function Menu() {
  const primaryNav = useRef(null);
  const navToggle = useRef(null);
  let history = useNavigate();
  const [isVisible, setIsVisible] = useState(false);
  const [isClosed, setIsClosed] = useState(true);

  const onClickHamberger = () => {
    setIsVisible(!isVisible);
    setIsClosed(!isClosed);
  };
  const isMobile = window.innerWidth < 800;
  const handleLogOut = () => {
    localStorage.removeItem("token");
    history("/login");
  };

  return (
    <header className="primary-header">
      <button
        className='mobile-nav-toggle'
        onClick={onClickHamberger}
        ref={navToggle}
        style={{
            backgroundRepeat: 'no-repeat',
        backgroundSize: 'contain',
        width:'4rem',
  background: `${isClosed ? 'url("https://img.icons8.com/ios/50/ffffff/menu--v1.png")' : 'url("https://img.icons8.com/ios/50/delete-sign--v1.png")'}`,
}}

        aria-controls='primary-navigation'
        aria-expanded="false"
      >
        
      </button>
      <nav>
      
      <ul
    className="primary-navigation"
    style={{
    transform: `translateX(${isVisible  ?  '0' : isMobile ? '-100vw' : '0' })`}}
    id="primary-navigation"
    ref={primaryNav}
  >
              <li className="nav-item">
                  <Link
                    className="nav-link"
                    id="logo"
                    to="/home"
                  >
                    Trendy
                  </Link>
              </li>
            
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
      </nav>
    </header>
  );
}

