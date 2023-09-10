import React from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";
import "../ProductDetails/style.css";
import { useNavigate } from "react-router-dom";
import {useDispatch, useSelector } from "react-redux";
import {addToCart} from "../../../Redux/Actions/action";



const ProductDetails = () => {
  const [data, setData] = useState([]);
  const params = useParams();
  const navigate=useNavigate();

const dispatch=useDispatch();
const selector=useSelector((state)=>{
return state;
})
// console.log(selector)
const addCart=(productId,productName,productQuantity,productprice)=>{
  dispatch(addToCart(productId,productName,productQuantity,productprice))
  navigate('/shopping-cart')
}

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${params.id}`)
      .then((response) => {
        setData(response.data);
        console.log(response.data);
      });
  }, []);

  return (
    <div className="productDetails">
      <div className="list">
        <img
          style={{ width: "300px", height: "300px" }}
          src={data.image}
          alt=""
        />
        <h3>
        
          {data.title}
        </h3>
        <h3>Category: {data.category}</h3>
        <h3>Price: {data.price}$</h3>
        {/* <h4>{data.rating.rate}</h4> */}

        <p style={{ marginTop: "20px" }}>
          Description: <br /> {data.description}
        </p>
        <button onClick={()=>addCart(data.id,data.title,data.quantity=1,data.price)} className="btn btn-secondary">Add to Cart</button>
      
      </div>
    </div>
  );
};

export default ProductDetails;
