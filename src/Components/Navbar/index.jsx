import React, { useState } from "react";
import "./style.css";
import { NavLink } from "react-router-dom";
import { userLoginSignUp } from "../../App";
import { useContext } from "react";
import {FaHome} from 'react-icons/fa';
import {LuShoppingCart} from 'react-icons/lu';
import {CiLogin} from 'react-icons/ci';
import {CiLogout} from 'react-icons/ci';
import {PiListBulletsBold} from 'react-icons/pi';
import {BsFillHandIndexThumbFill} from 'react-icons/bs'


const Navbar = () => {
 
    const [showMenu, setShowMenu] = useState(false);
  
    const toggleMenu = () => {
      setShowMenu(!showMenu);
    };
  const {loggedin,setLoggedIn}=useContext(userLoginSignUp)
  return (
    <div>
        <button className="toggle-button" onClick={toggleMenu}>
        Toggle Menu
      </button>
      <ul className={`unorderList ${showMenu ? 'show-menu' : ''}`}>
        <div>
          <img
            src="https://knowledge.tech/assets/i/KnowledgeImages/logo.png"
            alt=""
          />
        </div>
       
          <NavLink className='navlink' to="/">{<FaHome/>}  Home Page </NavLink>
          <NavLink className='navlink' to="/product"> {<BsFillHandIndexThumbFill />} Products</NavLink>
          <NavLink className='navlink' to="/category">{<PiListBulletsBold/>} Categories </NavLink>
        <NavLink className='navlink' to='/shopping-cart'>{<LuShoppingCart />} Shopping Cart</NavLink>
          {loggedin? <><NavLink className='navlink'  to='/' onClick={()=>{setLoggedIn(!loggedin)}} > {<CiLogout/>}Sign Out </ NavLink></>:<> <NavLink className='navlink'  to='/login'>{<CiLogin />} Login</NavLink></> } 
      </ul>
    </div>
  );
};

export default Navbar;
