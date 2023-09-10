import React, { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';
import CategoryClothing from '../../../Components/CategoryClothing';
import './style.css'
const MenClothing= () => {

const [thirdCategory,setThirdCategory]=useState([]);

const MenClothing=async()=>{
const response=await axios.get("https://fakestoreapi.com/products/category/men's clothing");
await response.json;
await response.data;
setThirdCategory(response.data)
console.log(thirdCategory)

}
useEffect(()=>{
    MenClothing();
},[])


return (
  <div>
      <div className='heading'>
      <h1 style={{fontSize:"3rem"}}>Mens Clothing</h1>
      </div>
  <div className='section3'>
{thirdCategory.map((values)=>{
  return (
    <CategoryClothing
    
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

export default MenClothing;