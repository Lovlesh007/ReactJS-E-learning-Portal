import "./coursedetail_style.css";
import React from "react";
import Arrow from "../../assets/images/arrow.svg";
import wishlist from "../../assets/images/wishlist.svg";
import WishListSelected from "../../assets/images/wishlist_selected.svg";
import course_image from "../../assets/images/courselogo.png";
import { addToCart } from "../../actions/cartaction";
import { useDispatch, useSelector } from "react-redux";
import { addToWishList, removeFromWishList } from "../../actions/wishlistaction";
import { showModal } from "../../actions/modalaction";
import {  useHistory } from "react-router-dom";
import deleteIcon from '../../assets/images/delete.svg';

const Coursedeatil = (props:any):any => {
  const dispatch = useDispatch();
//  const myState = useSelector((state) => state.cartReducer)
  // console.log(props.text);
const cartItems = useSelector((state:any) => state.cartReducer);

const addITEMtocart = (course:any) =>{
  dispatch(addToCart(course));
  dispatch(
    showModal({
      title: "Course successfully added in the cart",
      showButton: false,
      isSuccessAlert: true,
    })
  );
}

const isPresentIncart = (course: any): boolean => {
  return cartItems.includes(course);
};


const wishlistItems = useSelector((state:any) => state.wishListReducer);
// console.log("WishList",wishlistItems);
const isPresentInWishlist = (course: any): boolean => {
  return wishlistItems.includes(course);
};
const history = useHistory();
const openCourseDetail = () => {
  history.push("/courses/" + props.course.course_id);
};

  return (
    <div className="itemContainer"> 
      <img className="image_course_detail" src={course_image} alt = "course-Sign"></img>

      <div className="titleContainer">
        <h3 className="coursetitle">{props.course.course_name}</h3>
        <div className="tags">
          {props.course.tags.map((tag:any) => (
              // <TagText tag = {tag}/>
              <button className="tag_class">{tag}</button>
          ))}
        </div>
      </div>
      <p className="author">{props.course.instructor_name}</p>
       {(props.text === 'courses_page') && (<img
          className="wishlist"
          src={isPresentInWishlist(props.course) ? WishListSelected : wishlist}
          alt="add to wishlist"
          onClick = {() => {isPresentInWishlist(props.course) ? 
            dispatch(removeFromWishList(props.course))
            :dispatch(addToWishList(props.course))}}
        ></img>)
          }
      <p className="currentPrice">
        Rs  {props.course.discountedPrice}/-
        </p>
      <p className="price">
        {props.course.price}
      </p>
      <div className="btnContainer">
        <button className = "addtocartbtn" onClick = {()=>{
          isPresentIncart(props.course)?
          dispatch(showModal({
            title: "Already Exist in cart",
            showButton: false,
            isSuccessAlert: false,
            subTitle: "Course " + props.course.course_name + " already exist in cart!",
          }))
          : addITEMtocart(props.course)
           }}>ADD TO CART</button>
      </div>
      {props.text === 'wishlist_page' && (
        <img
          className="delete"
          src={deleteIcon}
          alt="delete from wishlist"
          onClick={()=>dispatch(removeFromWishList(props.course))}
        ></img>
      )}
      {/* <Link to = '/courses/{props.course.course_id}'> */}
        <img className="arrow" alt="open course" src={Arrow}
        onClick={openCourseDetail}
        />
        {/* </Link> */}
        
    </div>
  );
};

export default Coursedeatil;
