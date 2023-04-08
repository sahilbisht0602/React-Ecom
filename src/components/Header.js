import React from "react";
import "../index.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
const Header = () => {
  const cartItems = useSelector((store) => store.cart.items);
  return (
    <div className="header">
      <ul className="nav">
        <Link to={"/"}>
          <li>Home</li>
        </Link>
        <Link to={"cart"}>
          <li>Checkout Page</li>
        </Link>
        {/* {cartItems.length > 0 && (
          <Link to={"makePayment"}>
            <li>Make Payment</li>
          </Link>
        )} */}
        <Link to={"aboutUs"}>
          <li>About Us</li>
        </Link>
      </ul>
    </div>
  );
};

export default Header;
