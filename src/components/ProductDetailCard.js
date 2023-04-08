import React from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../constants/cartSlice";
import { useState } from "react";
const ProductDetailCard = ({
  image,
  category,
  price,
  rating,
  description,
  id,
}) => {
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();
  function val() {
    const d = Number(document.getElementById("select_id").value);
    setQuantity(d);
  }
  const addToCardHandler = () => {
    dispatch(
      addItem({ id, image, category, price, rating, description, quantity })
    );
  };
  return (
    <div className="productDetail-card">
      <div className="product-main">
        <div className="product-img">
          <img src={image} />
          <button className="btn" onClick={addToCardHandler}>
            Add To Cart
          </button>
          <div>
            <label htmlFor="cars">Quantity</label>

            <select
              onChange={val}
              style={{ marginLeft: "1rem" }}
              name="quantity"
              id="select_id"
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </div>
        </div>
        <div className="product-info">
          <span>Category: </span>
          <span style={{ color: "#78a899" }}>{category?.toUpperCase()}</span>
          <br />
          <span className="price">Price: </span>
          <span
            style={{
              color: "#78a899",
              marginTop: "0.4rem",
              display: "inline-block",
            }}
          >
            {" "}
            <span>&#8377; </span>
            {price}
          </span>{" "}
          <br />
          <span>Rating: </span>
          <span
            style={{
              backgroundColor: "#74b816",
              padding: "0.5rem",
              borderRadius: "1rem",
              display: "inline-block",
              marginTop: "0.4rem",
            }}
          >
            {rating?.rate}
            <ion-icon
              style={{
                marginLeft: "0.5rem",
              }}
              name="star-outline"
            ></ion-icon>
          </span>
          <br />
          <span>Description: </span>
          <span style={{ color: "#78a899" }}>{description}</span>
          <br />
        </div>
      </div>
    </div>
  );
};

export default ProductDetailCard;
