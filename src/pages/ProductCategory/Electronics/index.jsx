import React, { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';
import CategoryElectronics from '../../../Components/CategoryElectronics';
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
const Electronics= () => {

const [secondCategory,setSecondCategory]=useState([]);

const Electronics=async()=>{
const response=await axios.get('https://fakestoreapi.com/products/category/electronics');
await response.json;
await response.data;
setSecondCategory(response.data)
console.log(response.data)

}
useEffect(()=>{
    Electronics();
},[])


  return (
    <div>
        <div className='heading'>
            <h1 style={{fontSize:"3rem"}}>Electronics Items</h1>
        </div>
    <div className='section2'>
 {secondCategory.map((values)=>{
    return (
      <CategoryElectronics
      
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

export default Electronics;