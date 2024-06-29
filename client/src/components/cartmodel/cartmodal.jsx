import { useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import { useDispatch, useSelector } from "react-redux";

import "./cartmodal.css";
import { decrement, increment } from "../../redux/reducers/cart";

export default function cartmodal({
  show,
  name,
  handleShow,
  handleClose,
  ...props
}) {
  // ! Load Cart Item from redux

  const { cart } = useSelector((state) => state.cart);
  console.log(cart);
  const dispatch = useDispatch();

  const increaseQuantity = (product_id) => {
    dispatch(
      increment({
        product_id: product_id,
      })
    );
  };

  const decreaseQuantity = (product_id) => {
    dispatch(
      decrement({
        product_id: product_id,
      })
    );
  };

  return (
    <>
      <Offcanvas show={show} onHide={handleClose} {...props}>
        <Offcanvas.Header closeButton>
          <div className="w-100">
            <h1>Your Cart</h1>
            <span>Never leave a cart empty</span>
            <hr style={{ width: "100%" }} />
          </div>
        </Offcanvas.Header>
        <Offcanvas.Body>
          {cart.length > 0 ? (
            cart.map((item, index) => (
              <>
                <div className="cart-item" key={index}>
                  <div className="d-flex align-items-center">
                    <img src={item.product_image} width={150} alt="" />
                    <div>
                      <h2>{item.product_name}</h2>
                      <span>{item.product_desc}</span>
                    </div>
                  </div>
                  <div className="quantity-btn-group">
                    <span>Quantity</span>
                    <button
                      className="cart-control-btn"
                      onClick={() => increaseQuantity(item.product_id)}
                    >
                      +
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      className="cart-control-btn"
                      onClick={() => decreaseQuantity(item.product_id)}
                    >
                      -
                    </button>
                  </div>
                  <hr />
                </div>
              </>
            ))
          ) : (
            <span>Cart is empty</span>
          )}
          {cart.length > 0 ? (
            <button className="proceed-btn">Proceed To Checkout</button>
          ) : (
            <span></span>
          )}
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}
