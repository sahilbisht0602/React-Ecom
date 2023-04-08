import React from "react";

const PaymentDetailCard = ({ image, price, quantity, id }) => {
  return (
    <>
      <div className="card">
        <img src={image} />
        <p style={{ padding: "1rem" }}>Total Quantity: {quantity}</p>
        <p style={{ padding: "1rem" }}>Total Price: {price * quantity}</p>
      </div>
    </>
  );
};

export default PaymentDetailCard;
