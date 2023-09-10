import React from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';

import './style.css'

const ProductCategory = () => {

  const [category,setCategory]=useState([]);

    const navigate=useNavigate();
    const categories=async()=>{
      const response=await axios.get('https://fakestoreapi.com/products/categories');
      await response.json;
      await response.data;
      console.log(response.data);
      setCategory(response.data)


    }
 
    useEffect(()=>{
    categories();
    }, []);




  return (
    <div className='newcontainer'>
      <h1>Product Categories</h1>
      {category.map((entry)=>{
      return (
          <>
          {/* <h1>{entry}</h1> */}
          
          </>

      )
      })}
      <div className='mainContainer'>
        <div className='box shadow p-3 mb-5 bg-body rounded' >
         <h2>Electronics</h2>
         <button className='btn btn-secondary ' onClick={()=>navigate('/category/electronic')} >View </button> 
        </div>
        <div className='box shadow p-3 mb-5 bg-body rounded'>
         <h2>Jewellery</h2>
         <button className='btn btn-secondary' onClick={()=>navigate('/category/jewellery')} >View </button> 
        </div>
        <div className='box shadow p-3 mb-5 bg-body rounded'>
         <h2 className='text-center'>Men's Clothing</h2>
         <button className='btn btn-secondary' onClick={()=>navigate('/category/men-clothing')} >View </button> 
        </div>
        <div className='box shadow p-3 mb-5 bg-body rounded'>
         <h2 className='text-center'>Women's Clothing</h2>
         <button className='btn btn-secondary' onClick={()=>navigate('/category/women-clothing')} >View</button> 
        </div>
        </div>
      </div>


 
  )
}

export default ProductCategory;