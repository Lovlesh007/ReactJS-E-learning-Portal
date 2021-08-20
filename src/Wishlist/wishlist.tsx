import './wishlist_style.css';
import React from "react";
import Coursedeatil from "../components/Coursedetail/coursedetail";
import TitleBar from "../components/TitleBar/TitleBar";
import icon from "../assets/images/search.svg";
// import courseData from "../mockdata.json";
import {  useSelector } from "react-redux";
// import {cartReducer} from '../reducers/cartreducer'
// import store from "../store";
// import { removeFromCart } from "../actions/cartaction";
import course_image from "../assets/images/courselogo.png";
// import { removeFromWishList } from "../actions/wishlistaction";
import { Link } from 'react-router-dom';

const Courses = () => {
  // console.log(allcourses.courses[5].course_id);
    const myState  = useSelector((state:any) => state.cartReducer);
    const wishlistState = useSelector((state:any) => state.wishListReducer)
    // const dispatch = useDispatch();
  //  const myState  = store.getState();

  let TotalCartPrice = 0;
  // console.log("MYSTATE",myState);
  return (
    <div className="course">
      <TitleBar></TitleBar>
      <div className="container">

        <div className="leftContainer">
        <div className = "headingoflist">
           <p>My WishList</p> 
          <div className="optionContainer">
            <select className="customSelect">
              <option>Course Price</option>
              <option>Low to High</option>
              <option>High to Low</option>
            </select>
            </div>
          </div>
          <div className = "listofCourses">
          {wishlistState.map((course:any) => {
            return(
            <Coursedeatil 
            // key = {course.course_id}
            course = {course}
            text = "wishlist_page"
            />
            );
          })}
         
        </div>
        
        </div>
        <div className="rightContainer">
         
          {/* //search bar */}
            <div className="searchForm">
              <div>
                  <input
                    className="searchInput"
                    type="text"
                    placeholder="Search here"
                    name="search"
                  />
              </div>
                  <div className="searchBtn">
                    <img className="searchimage" src={icon} alt = "icon"/>
                  </div>
            </div>
              <div className="dashboard-cart">
                <div className ="cartdivtitle">
                  YOUR CART DETAILS
                </div>
                <div className = "cart-dashboard-background">
               {myState.length === 0?
               <div className = "empty-text-for-cart">
                 <p> Your cart is empty right now. Please add courses in the cart
                from the list</p>
                </div>
                :<div></div>
                } 
             {
              // 
               myState.map((course:any) => {
                (TotalCartPrice =
                  TotalCartPrice +
                  (course.discountedPrice))
                    return(
                      <div className = "cartdiv">
                      <div className = "cart_image_name">
                      <div className = "cart_image_dashboard"><img alt = "wishlist" className="image_cart_course" src={course_image}></img></div>
                      <div className = "cart_course_name">{course.course_name}</div>
                      </div>
                      <div className = "course_cart_price">
                      Rs {course.discountedPrice}/-  </div>
                      {/* <button onClick = {() => dispatch(removeFromCart(course))}>Delete</button> */}
                      
                      </div>
                       
                    );
                   
              })
              // </div>
             }
             </div>
             </div>
             <div className="carttotalprice">
               <div className = "total_cart_value">Total cart value</div>
                <div className = "actual_price_value">
               <div> Rs {TotalCartPrice}/- </div>
                {TotalCartPrice >0 &&<Link to = "/cart" className="go_to_checkout"><div>
               GO TO CHECKOUT</div>
              </Link>
              }
              
              </div>
             </div>
           </div>
           {/* <div>
             { wishlistState.map((course:any) =>{
               return(
                 <div>
                 <div>{course.course_id}</div>
                 <div>{course.course_name}</div>
                 <button onClick = {()=>dispatch(removeFromWishList(course))}>Delete</button>
                 </div>
               );
             })}
           </div> */}
          </div>
        
       
        </div>

  );
};

export default Courses;
