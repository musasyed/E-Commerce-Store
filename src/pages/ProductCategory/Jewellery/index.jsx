import React, { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';
import CategoryJewellery from '../../../Components/CategoryJewellery';
import './style.css'
const Jewellery= () => {

const [firstCategory,setFirstCategory]=useState([]);

const jewellery=async()=>{
const response=await axios.get('https://fakestoreapi.com/products/category/jewelery');
await response.json;
await response.data;
setFirstCategory(response.data)
console.log(firstCategory)

}
useEffect(()=>{
jewellery();
},[])


  return (
    <div>
      <div className='heading'>
        <h1 style={{fontSize:"3rem"}}>Jewellery Items</h1>
      </div>
    <div className='section1'>
 {firstCategory.map((values)=>{
    return (
      <CategoryJewellery 
      
      category={values.category}
      description={values.description}
      image={values.image}
      title={values.title}
      price={values.price}
      id={values.id}
      />
      
    

    )
 })}

 </div>
 </div>
  )
}

export default Jewellery;