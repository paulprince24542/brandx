import React, { useState } from "react";
import "./navbar.css";

import CartModal from "../../components/cartmodel/cartmodal";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function navbar() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const { cartCount } = useSelector((state) => state.cart);
  return (
    <>
      <CartModal
        show={show}
        placement={"end"}
        handleShow={handleShow}
        handleClose={handleClose}
      />

      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Fashion Store
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Store
                </a>
              </li>
            </ul>
            <ul className="navbar-nav mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" onClick={handleShow}>
                  Cart {cartCount}
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#">
                  Login / Signup
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
