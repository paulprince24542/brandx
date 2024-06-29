import { Route, Routes } from "react-router-dom";
import "./App.css";

import Home from "./pages/home/home";
import Login from "./pages/login/login";
import Signup from "./pages/signup/signup";
import Cart from "./pages/cart/cart";
import Product from "./pages/product/product";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/product" element={<Product />} />
      </Routes>
    </>
  );
}

export default App;
