import React, { useState } from "react";
import "./productcard.css";
import { ShoppingCart } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, decrement, increment } from "../../redux/reducers/cart";
import { useNavigate } from "react-router-dom";

export default function product({
  product_id,
  product_name,
  product_desc,
  product_price,
  product_image,
}) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { cartCount } = useSelector((state) => state.cart);

  const addCart = () => {
    const cartItem = {
      product_id,
      product_name,
      product_desc,
      product_price,
      product_image,
      quantity: 1,
    };
    // console.log(cartItem);
    dispatch(
      addToCart({
        cart: cartItem,
        itemId: product_id,
      })
    );
    console.log("Add");
  };

  function productDetailsNavigate(product_id) {
    navigate(`/product?id=${product_id}`);
  }
  return (
    <>
      <div
        className="product-card"
        onClick={() => {
          // addCart();
          productDetailsNavigate(product_id);
        }}
      >
        <div className="card-image">
          <img src={product_image} alt="" />
        </div>
        <h3>{product_name}</h3>
        {/* <p className="product_desc">{product_desc}</p> */}
        <span className="product_price"> ${product_price}.00 </span>
        {/* {cartCount == 0 ? (
          
        ) : (
          <div className="cart-count">
            <button onClick={() => dispatch(increment())}>+</button>
            <span>{cartCount}</span>
            <button onClick={() => dispatch(decrement())}>-</button>
          </div>
        )} */}
        {/* <button
          className="cart-btn"
         
        >
          View Product
        </button> */}
      </div>
    </>
  );
}
