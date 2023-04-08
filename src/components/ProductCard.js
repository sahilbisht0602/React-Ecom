import React, { useEffect, useState } from "react";

const ProductCard = ({ id, title, description, image, price, category }) => {
  return (
    <div className="cardContainer">
      <div className="card">
        <img src={image} />
        <p>{title}</p>
        <p>Rs. {price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
