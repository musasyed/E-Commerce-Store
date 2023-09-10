import React, { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';
import CategoryWomenClothing from '../../../Components/CategoryWomenClothing';
import './style.css'
const WomenClothing= () => {

const [fourthCategory,setFourthCategory]=useState([]);

const WomenClothing=async()=>{
const response=await axios.get("https://fakestoreapi.com/products/category/women's clothing");
await response.json;
await response.data;
setFourthCategory(response.data)
console.log(thirdCategory)

}
useEffect(()=>{
    WomenClothing();
},[])


return (
  <div>
      <div className='heading'>
          <h1 style={{fontSize:"3rem"}}>Women's Clothing</h1>
      </div>
  <div className='section4'>
{fourthCategory.map((values)=>{
  return (
    <CategoryWomenClothing
    
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

export default WomenClothing;