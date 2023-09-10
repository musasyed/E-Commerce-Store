import React from "react";
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from "react-router-dom";
import { addToCart } from "../../Redux/Actions/action";
import { useDispatch, useSelector } from "react-redux";


const CategoryWomenClothing = (props) => {
const navigate=useNavigate();
const dispatch=useDispatch();
const selector=useSelector((state)=>{
return state;
})

const addCart=(productId,productName,productQuantity,productprice)=>{
  dispatch(addToCart(productId,productName,productQuantity,productprice))
  navigate('/shopping-cart')
}


  return <div className="WomenItems">

<img src={props.image} style={{width:'200px', height:'200px' }} alt="" />
<h1>Title: {props.title}</h1>
<h2>Category: {props.category}</h2>
<h3> Price: {props.price}$</h3>
{/* <p>Description: {props.description}</p> */}
<button onClick={()=>addCart(props.id,props.title,props.quantity,props.price)}  className="btn btn-primary mt-2">Add To Cart</button>
<button className="btn btn-primary mt-2" onClick={()=>navigate(`/product/productdetails/${props.id}`)}>Product Details</button>


  </div>
};

export default CategoryWomenClothing;
