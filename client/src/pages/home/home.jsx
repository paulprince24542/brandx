import React from "react";
import "./home.css";

import Navbar from "../../components/navbar/navbar";
import ProductCard from "../../components/productcard/productcard";

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

export default function home() {
  return (
    <>
      <Navbar />

      <div className="product-wrapper">
        {productData.map((item, index) => (
          <ProductCard
            product_id={item.product_id}
            product_name={item.product_name}
            product_desc={item.product_desc}
            product_price={item.product_price}
            product_image={item.product_image}
            key={index}
          />
        ))}
      </div>
    </>
  );
}
