import React from "react";
import logo from "../assets/images/nav_logo.png";
import CartIcon from "../assets/images/cart.svg";
import ProfileIcon from "../assets/images/profile.svg";
import './header_styles.css';
import {Link, NavLink} from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap. css'; 

const Headerbar: React.FC = ()=>{
    return (
        <div className = "headBar">
        <Link to = "/"><img src={logo} className= "headImage" alt="App Logo"/></Link>
        <div className = "headitems">
        <NavLink exact to = "/" className = "head-text" activeClassName="active">
          <p >COURSES</p>
          </NavLink>
        <NavLink to = "/wishlist" className = "head-text" activeClassName="active">
          <p >MY WISHLIST</p>
          </NavLink>
        <NavLink to = "/cart" activeClassName="active1"  className = "img-text-head">
          <img src={CartIcon}  alt = "Cart Icon" />
          </NavLink>
        <NavLink to = "/profile" activeClassName="active1" className = "img-text-head">
          <img src={ProfileIcon}   alt = "Profile-icon"/>
          </NavLink>
        </div>
        </div> 
    );
}
export default Headerbar;