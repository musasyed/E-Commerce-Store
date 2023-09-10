import { Route, Routes } from "react-router-dom";
import "./App.css";
import React, { createContext, useState } from "react";
import Home from "./pages/Home";
import Category from "./pages/ProductCategory";
import Navbar from "./Components/Navbar";
import Product from "./pages/Product";
import ProductDetails from "./pages/Product/ProductDetails";
import PageContainer from "./Components/PageContainer";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import ShoppingCart from "./pages/ShoppingCart";
import PrivateRoute from "./Components/PrivateRoute";
import MenClothing from "./pages/ProductCategory/MenClothing";
import WomenClothing from "./pages/ProductCategory/WomenClothing";
import Jewellery from "./pages/ProductCategory/Jewellery";
import Electronics from "./pages/ProductCategory/Electronics";
import ProductCategory from "./pages/ProductCategory";

export const userLoginSignUp=createContext();

function App() {
const [loggedin,setLoggedIn]=useState(false);


  return (
    <>
      
        <userLoginSignUp.Provider value={{loggedin,setLoggedIn}}>
      <Routes>
        <Route path="/" element={<PageContainer />}>
        <Route index element={<Home />}></Route>
        <Route path="product">
          <Route index element={<Product />}></Route>
          <Route path="productdetails/:id" element={<ProductDetails />}></Route>
        </Route>
        {/* <Route path="categories" element={<Category />}></Route> */}
        <Route path="category" >
          <Route index element={<ProductCategory />}></Route>
          <Route path="jewellery" element={<Jewellery />}></Route>
          <Route path="electronic" element={<Electronics />}></Route>
          <Route path="men-clothing" element={<MenClothing />}></Route>
          <Route path="women-clothing" element={<WomenClothing />}></Route>
          </Route>


        <Route path="shopping-cart" element= { <PrivateRoute><ShoppingCart /></PrivateRoute>}></Route>
        </Route>
        <Route path="login" element={<Login />}></Route>
        <Route path="signup" element={<SignUp />}></Route>
      </Routes>
        </userLoginSignUp.Provider>
    </>
  );
}

export default App;
