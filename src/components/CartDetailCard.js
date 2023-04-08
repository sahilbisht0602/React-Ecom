import React from "react";
import { useDispatch } from "react-redux";
import {
  increaseQuantity,
  decreaseQuantity,
  removeItem,
} from "../constants/cartSlice";
import { Link } from "react-router-dom";
const CartDetailCard = ({ image, price, quantity, id }) => {
  const dispatch = useDispatch();
  const incrementHandler = () => {
    dispatch(increaseQuantity(id));
  };
  const removeItemHandler = () => {
    dispatch(removeItem(id));
  };
  const decrementHandler = () => {
    dispatch(decreaseQuantity(id));
  };
  return (
    <div className="main-cart">
      <div className="card">
        <img src={image} />
        <div className="cart-info">
          <p>Price for one : {price}</p>
          <p>Total Quantity : {quantity}</p>
          <p>Total Price : {Math.trunc(price * quantity)}</p>
        </div>
        <button className="btn" onClick={incrementHandler}>
          Add
        </button>
        <button className="btn" onClick={decrementHandler}>
          Reduce
        </button>
        <button className="btn" onClick={removeItemHandler}>
          Remove From Cart
        </button>
      </div>
    </div>
  );
};

export default CartDetailCard;
