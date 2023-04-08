import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import PaymentDetailCard from "./PaymentDetailCard";
import { emptyItem } from "../constants/cartSlice";
const MakePayment = () => {
  const [totalPrice, setTotalPrice] = useState(0);
  const cartItems = useSelector((store) => store.cart.items);
  const cartQuantity = useSelector((store) => store.cart.totalQuantity);
  // const dispatch = useDispatch();
  useEffect(() => {
    calculateTotalPrice();
    // emptyCart();
  }, []);
  function calculateTotalPrice() {
    const price = cartItems.reduce((acc, item) => {
      return acc + item.price * item.quantity;
    }, 0);
    setTotalPrice(price);
  }
  //   function emptyCart() {
  //     dispatch(emptyItem());
  //   }
  return (
    <>
      <h1 style={{ textAlign: "center", marginTop: "2rem" }}>
        Your Order Is confirmed it will delivered by 15 April, 2023 <br />
        Total Item : {cartQuantity} <br />
        Total Amount : {Math.trunc(totalPrice)}
      </h1>
      <div className="cart-container">
        {cartItems.map((item) => {
          return (
            <PaymentDetailCard
              image={item?.image}
              quantity={item?.quantity}
              price={item?.price}
              id={item?.id}
            />
          );
        })}
      </div>
    </>
  );
};

export default MakePayment;
