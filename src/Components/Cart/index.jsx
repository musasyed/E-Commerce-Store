import React from "react";
import "./style.css";
import { Navigate, useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

const Cart = (props) => {
  const navigate = useNavigate();
  const params = useParams();

  return (
    <div className="cartStyle">
      <div className="cartChild">
        <img
          style={{ width: "200px", height: "200px" }}
          src={props.Image}
          alt=""
        />
        <h3>
         {props.Title}
        </h3>
        <h6> Price: ${props.price}</h6>

        <button
          onClick={() => navigate(`/product/productdetails/${props.id}`)}
          className="btn btn-primary"
        >
          Product Details
        </button>
      </div>
    </div>
  );
};

export default Cart;
