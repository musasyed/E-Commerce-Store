import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { removeItem } from '../../Redux/Actions/action';
import "./style.css"


const ShoppingCart = () => {
  const cartItems=useSelector((state)=>{
    return state.cartItems;
  })
  
  useSelector(state=>console.log(state))
  
  const dispatch=useDispatch();
  
  const totalPrice = cartItems.reduce((total, item) => total + (item.price * item.Quantity), 0);
  const roundedTotalPrice = Math.round(totalPrice * 100) / 100; 

  const handleDelete=(productId)=>{
    dispatch(removeItem(productId))
  }

  return (
    <div className='shop-cart'>
        <h1>Welcome to Your Shopping Cart Page</h1>
        <div>
        <table className="table table-bordered text-center">
  <thead>
    <tr>
    <th scope="col">Product Name</th>
      <th scope="col">Product Price</th>
      <th scope="col">Product Quantity</th>
      <th scope="col">Empty Cart</th>
    </tr>
  </thead>
  
        { 
          cartItems.map((values)=>{
            
              return(
                <>
                <tbody>
                    
                {/* <div className='shop-section'>
                <h1>{values.Name}</h1>
               <p>{values.price}$</p>
           
                <button onClick={()=>{
                  handleDelete(values.id)
                }} className='btn btn-secondary button'>delete</button>
                </div> */}


    <tr>
      {/* <th scope="row">1</th> */}
      <td>{values.Name}</td>
      <td>{values.price}$</td>
      <td>{values.Quantity}</td>
      <td><button onClick={()=>handleDelete(values.id)} className='btn btn-primary'>Delete</button></td>

    </tr>
  </tbody>


               
                </>
              )
            })
          }
          </table>
          <div className=" mt-2 text-center total-price">
          Total Price: {roundedTotalPrice}$
        </div>
          </div>
    </div>
  )
}

export default ShoppingCart;