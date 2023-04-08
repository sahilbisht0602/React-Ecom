import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addItem } from "../constants/cartSlice";
import ProductDetailCard from "./ProductDetailCard";
const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState([]);

  useEffect(() => {
    getProductById();
  }, []);
  async function getProductById() {
    const response = await fetch(`https://fakestoreapi.com/products/${id}`);
    const data = await response.json();
    setProduct(data);
  }

  return (
    <>
      <ProductDetailCard {...product} />
    </>
  );
};

export default ProductDetail;
