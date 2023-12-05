import React, { useState } from "react";
import "./scss/_login.scss";
import { useNavigate } from "react-router-dom";
import Footer from './Footer'

const Login = () => {
  let history = useNavigate();
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const { email, password } = credentials;

const onClickLogin = async (e) => {
  e.preventDefault();
  try {
    const res = await fetch("https://trendy-backend.onrender.com/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Headers": "*",
        "Access-Control-Allow-Methods": "POST, GET, PATCH, DELETE",
        "Access-Control-Allow-Origin": "https://trendy-clothes.netlify.app",
      },
      body: JSON.stringify({ email, password }),
    });
    const data = await res.json();
    if (data.token) {
      localStorage.setItem("token", data.token);
      history("/home");
    } else {
      console.error("Login failed:", data.error); // Add error handling
    }
  } catch (error) {
    console.error("Error during login:", error); // Add error handling
  }
};


  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  return (
    <>
    <div className="login-section">
      <form className='login-form' onSubmit={onClickLogin}>
      <h1>Login</h1>
        <div>
          <label htmlfor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            name="email"
            value={email}
            onChange={onChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            name="password"
            value={password}
            onChange={onChange}
          />
        </div>
        <button type="submit" className="btn btn-primary btn-lg login-btn">
          Submit
        </button>
      </form>
    </div>
    <Footer/>
    </>
  );
};

export default Login;
