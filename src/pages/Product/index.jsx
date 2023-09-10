import React from "react";
import axios from "axios";
import Cart from "../../Components/Cart";
import { useState } from "react";
import { useEffect } from "react";
import "./style.css";
import { useNavigate } from "react-router-dom";

const Product = () => {
  const [items, setItems] = useState([]);
  const [text, setText] = useState("");
  const [filterResult, setFilterResult] = useState([]);
  const navigate = useNavigate();



  // Here is Searching Apply
  const handleTitle = (event) => {
    setText(event.target.value);
    const filteration = items.filter((filterTitle) => {
      return filterTitle.title.toLowerCase().includes(text.toLowerCase());
    });
    setFilterResult(filteration);
  };
  

// Apply Async Await for Getting Data
const fetchAPI=async()=>{
const response=await axios.get('https://fakestoreapi.com/products');
await response.json;
const getData=await response.data;
  setItems(response.data);
  setFilterResult(response.data);
}
console.log(items)

  useEffect(() => {
    fetchAPI();
    // axios.get("https://fakestoreapi.com/products").then((response) => {
    //   setItems(response.data);
    //   setFilterResult(response.data);
    //   // console.log(response.data);
    // });
  }, []);


  // Here Sorting Function Apply

  const handleSelect = (event) => {
    let selection = event.target.value;

    let sorted = [];
    if (selection === "sort-by") {
      sorted = [...items];
    } else if (selection === "price-low-to-high") {
      sorted = [...filterResult].sort((a, b) => a.price - b.price);
    } else if (selection === "price-high-to-low") {
      sorted = [...filterResult].sort((a, b) => b.price - a.price);
    }
    setFilterResult(sorted);
    setItems(sorted);
  };

  return (
    <div>
      {" "}
      <input
        className="searchField mt-5"
        onChange={handleTitle}
        type="text"
        name=""
        id=""
        placeholder="Search"
        style={{ padding: "10px" }}
      />
      <select onChange={handleSelect} className="searchField" name="" id="">
        <option value="sort-by">Sort By</option>
        <option value="price-low-to-high">Price Low to High</option>
        <option value="price-high-to-low">Price High to Low</option>
      </select>
      <div className="productsCart">
        {/* <h1>Product Page</h1> */}
        {filterResult.map((values, index) => {
          return (
            <>
              <Cart
                key={index}
                Title={values.title}
                Image={values.image}
                price={values.price}
                id={values.id}
              />
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Product;
