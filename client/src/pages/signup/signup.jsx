import React from "react";
import "./signup.css";
import { Link } from "react-router-dom";
import Navbar from "../../components/navbar/navbar";

export default function signup() {
  return (
    <>
    <Navbar/>
      <div className="container">
        <div className="signup-wrapper">
          <div className="signup-image">
            <h1>Shopix</h1>
            <span>Elevate Your Shopping Experience</span>
          </div>
          <div className="signup-box">
            <h1>Sign up</h1>
            <p className="text-center mb-4">
              Let's get started with your account
            </p>
            <div className="input-field">
              <label htmlFor="Email">Email Address</label>
              <input type="email" placeholder="name@example.com" />
            </div>
            <div className="input-field">
              <label htmlFor="Password">Password</label>
              <input type="password" placeholder="*********" />
            </div>
            <div className="input-field">
              <label htmlFor="Password">Confirm Password</label>
              <input type="password" placeholder="*********" />
            </div>
            <p className="text-center">
              Already have an account? ? <Link to="/login">Log In</Link>
            </p>
            <span>Forgot Password ?</span>
            <button className="signup-btn">Login</button>
            <br />
            <span>Or</span>
          </div>
        </div>
      </div>
    </>
  );
}
