import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { Link } from "react-router-dom";
import ProductDetail from "./ProductDetail";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getProducts();
  }, []);
  const [selectedCategory, setSelectedCategory] = useState("");
  const checkBoxValue = (e) => {
    console.log(e.target.value);
    setSelectedCategory(e.target.value);
  };
  useEffect(() => {
    getProductByCategory();
  }, [selectedCategory]);
  async function getProductByCategory() {
    setIsLoading(true);
    const response = await fetch(
      "https://fakestoreapi.com/products/category/" + selectedCategory
    );
    const data = await response.json();
    setProducts(data);
    setIsLoading(false);
  }
  async function getProducts() {
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();
    setProducts(data);
    setIsLoading(false);
  }
  const categoryArr = [
    "electronics",
    "jewelery",
    "men's clothing",
    "women's clothing",
  ];
  // if (isLoading) {
  //   return <h1 className="loading">Loading...</h1>;
  // }
  return (
    <div className="item-container">
      <div className="card checkbox-item">
        {categoryArr.map((category, index) => {
          return (
            <div>
              <div className="category">
                <input
                  type="radio"
                  key={index}
                  id={index}
                  name="category"
                  value={category}
                  onClick={checkBoxValue}
                />
                <label for="htmlFor">{category.toUpperCase()}</label>
                <br />
              </div>
            </div>
          );
        })}

        <button className="btn-reset" onClick={getProducts}>
          Reset Filter
        </button>
      </div>
      <div className="all-items">
        {isLoading && <h1 className="loading">Loading...</h1>}
        {products.map((product) => {
          return (
            <div>
              <Link to={"productDetail/" + product.id} key={product.id}>
                <ProductCard key={product.id} {...product} />{" "}
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
