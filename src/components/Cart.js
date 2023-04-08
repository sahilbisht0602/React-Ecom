import React from "react";
import { useSelector } from "react-redux";
import CartDetailCard from "./CartDetailCard";
import { Link } from "react-router-dom";
const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  if (cartItems.length === 0) {
    return (
      <>
        <div className="card">Cart is Empty Make a purchase</div>
        <Link style={{ margin: "2rem" }} className="btn" to="/">
          Order Here{" "}
        </Link>
      </>
    );
  }
  return (
    <>
      <Link to={"/makePayment"}>
        <button className="btn" style={{ marginLeft: "2rem", width: "28%" }}>
          Make Payment
        </button>
      </Link>
      <div className="cart-container">
        {cartItems.map((item) => {
          return (
            <CartDetailCard
              image={item?.image}
              quantity={item?.quantity}
              price={item?.price}
              id={item?.id}
              key={item?.id}
            />
          );
        })}
      </div>
    </>
  );
};

export default Cart;
