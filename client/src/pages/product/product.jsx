import React, { useEffect } from "react";
import "./product.css";

import Navbar from "../../components/navbar/navbar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Heart, ShoppingCart } from "lucide-react";
import { useParams, useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../redux/reducers/cart";

export default function product() {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const id = searchParams.get("id");

  const productData = [
    {
      product_id: 1,
      product_image: "assets/hero-1.png",
      product_name: "Nike Air Max 1",
      product_desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa aut voluptatem nobis, mollitia",
      product_price: 80,
    },
    {
      product_id: 2,
      product_image: "assets/hero-2.png",
      product_name: "Adidas Ultraboost",
      product_desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa aut voluptatem nobis, mollitia",
      product_price: 90,
    },
    {
      product_id: 3,
      product_image: "assets/hero-3.png",
      product_name: "Puma RS-X",
      product_desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa aut voluptatem nobis, mollitia",
      product_price: 70,
    },
    {
      product_id: 4,
      product_image: "assets/hero-1.png",

      product_name: "Reebok Classic",
      product_desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa aut voluptatem nobis, mollitia",
      product_price: 75,
    },
    {
      product_id: 5,
      product_image: "assets/hero-2.png",
      product_name: "New Balance 990",
      product_desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa aut voluptatem nobis, mollitia",
      product_price: 100,
    },
    {
      product_id: 6,
      product_image: "assets/hero-3.png",
      product_name: "Asics Gel-Kayano",
      product_desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa aut voluptatem nobis, mollitia",
      product_price: 85,
    },
    {
      product_id: 7,
      product_image: "assets/hero-1.png",
      product_name: "Vans Old Skool",
      product_desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa aut voluptatem nobis, mollitia",
      product_price: 60,
    },
    {
      product_id: 8,
      product_image: "assets/hero-2.png",
      product_name: "Converse Chuck Taylor",
      product_desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa aut voluptatem nobis, mollitia",
      product_price: 55,
    },
    {
      product_id: 9,
      product_image: "assets/hero-3.png",
      product_name: "Under Armour HOVR",
      product_desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa aut voluptatem nobis, mollitia",
      product_price: 95,
    },
  ];

  useEffect(() => {}, [id]);
  const product = productData.find((item) => item.product_id === Number(id));
  console.log(product);

  function addCart() {
    dispatch(
      addToCart({
        product_id: product.product_id,
        product_name: product.product_name,
        product_desc: product.product_desc,
        product_price: product.product_price,
        product_image: product.product_image,
        quantity: 1,
      })
    );
  }

  return (
    <>
      <Navbar />
      <Container>
        <div className="product-content-wrapper">
          <Row>
            <Col md={6}>
              <div className="product-detail-image">
                <img src={product.product_image} alt="" />
              </div>
            </Col>
            <Col md={6}>
              <div className="product-description">
                <h1>{product.product_name}</h1>
                <h3> ${product.product_price}.00</h3>
                <span style={{ color: "grey" }}>Prices include taxes</span>
                <h5 className="mt-2">Color</h5>
                <div className="color-box">
                  <div className="color-box-child">
                    <span>Red</span>
                  </div>
                  <div className="color-box-child">
                    <span>Blue</span>
                  </div>
                </div>
                <h5 className="mt-2">Size</h5>
                <div className="size-box">
                  <div className="size-box-child">
                    <span>XS</span>
                  </div>
                  <div className="size-box-child">
                    <span>S</span>
                  </div>
                  <div className="size-box-child">
                    <span>M</span>
                  </div>
                  <div className="size-box-child">
                    <span>L</span>
                  </div>
                </div>
                <h5 className="mt-3">Product Description</h5>
                <span>{product.product_desc}</span>
                <div className="quantity-group">
                  <select name="" id="" className="quantity-select">
                    <option value="">1</option>
                    <option value="">2</option>
                  </select>
                  <button className="addtocart" onClick={() => [addCart()]}>
                    <ShoppingCart /> <span>Add To Cart</span>
                  </button>
                  <button className="bookmark-btn">
                    <Heart color="green" />
                  </button>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </>
  );
}
