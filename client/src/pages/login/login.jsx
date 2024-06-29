import React from "react";
import "./login.css";
import { Link } from "react-router-dom";

export default function login() {
  return (
    <>
      <div className="container">
        <div className="login-wrapper">
          <div className="login-box">
            <h1>Login</h1>
            <p className="text-center mb-4">
              Please enter your details to sign in.
            </p>
            <div className="input-field">
              <label htmlFor="Email">Email Address</label>
              <input type="email" placeholder="name@example.com" />
            </div>
            <div className="input-field">
              <label htmlFor="Password">Password</label>
              <input type="password" placeholder="*********"/>
            </div>
            <p className="text-center">
              Don't have an account ? <Link to="/signup">Sign Up</Link>
            </p>
            <span>Forgot Password ?</span>
            <button className="login-btn">Login</button>
            <br />
            <span>Or</span>
          </div>
        </div>
      </div>
    </>
  );
}
