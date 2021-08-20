import './course_detail_style.css';
import React from "react";
import clock from "../assets/images/clock.svg";
import TitleBar from '../components/TitleBar/TitleBar';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from "react-router-dom";
import courseData from '../mockdata.json';
import { addToCart } from '../actions/cartaction';
import { addToWishList } from '../actions/wishlistaction';
import { showModal } from '../actions/modalaction';

const CourseDetail = () => {

    const dispatch = useDispatch();
    const location:any = useParams();
    const courses = courseData.all_courses;
    const course = courses.find((item:any) => item.course_id == location.id);
    const cartItems = useSelector((state:any) => state.cartReducer);
    const wishListItems = useSelector((state:any) => state.wishListReducer)

    const isPresentIncart = (course: any): boolean => {
      return cartItems.includes(course);
    };

    const isPresentInwishlist = (course: any): boolean => {
      return wishListItems.includes(course);
    };

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

    const addITEMtowishlist = (course:any) =>{
      dispatch(addToWishList(course));
      dispatch(
        showModal({
          title: "Course successfully added in the WishList",
          showButton: false,
          isSuccessAlert: true,
        })
      );
    }
  

  return (
    <div className="container1_detail">
   <TitleBar></TitleBar>
      <h3 className="pageSubtitle_detail">
        <Link to = '/' style = {{textDecoration:"none",color:"black"}}>All Courses</Link> <b> &#160; &#160; &#10093; &#160; &#160;
       {course?.course_name}
        </b>
      </h3>
      <div className="courseDescription_detail">
        <h3>
        {course?.course_name}
        </h3>
        <p className="subtitle_detail">
        Responsive Design Course XYZ How to design responsive templates
        </p>
        <p className="author_detail">{course?.instructor_name}</p>
        <div className="tagContainer_detail">
          {
            course?.tags.map((tag:any) =>{
              return (
              <button className="white_detail">{tag}</button>
              );
            })
          }
        </div>
      </div>
      <div className="container2_detail">
        <div className="courseDetailContainer_detail">
          <h4 className="courseDetail_detail">Course Details</h4>
            <p className="detail_detail">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.
            </p>
            <p className="detail_detail">
            Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdie.
            </p>
            <p className="detail_detail">
            Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. 
            Mauris massa. Vestibulum lacinia arcu eget nulla.
            </p>
            <p className="detail_detail">
            Class aptent taciti sociosqu ad litora torquent per conubia nostra,
             per inceptos himenaeos. Curabitur sodales ligula in libero.
            </p>
            
        </div>
        <div className="previewContainer_detail">
          <div className="preview_detail"></div>
          <div className="priceContainer_detail">
            <p className="currentPrice_detail">
               Rs {course?.discountedPrice}/- 
            </p>
            <p className="price_detail">
             
                Rs {course?.price}/-
            </p>
            <div className="hours_detail">
              <img src={clock} alt ="clock"></img>
              <p className="hoursleft_detail">
                <b>8 hours</b> left for this price
              </p>
            </div>
            <div className="btnContainer_detail">
               <button
                style = {{width:"48%"}}
                 onClick={()=>{
                  isPresentIncart(course)?
                  dispatch(showModal({
                    title: "Already Exist in cart",
                    showButton: false,
                    isSuccessAlert: false,
                    subTitle: "Course " + course?.course_name + " already exist in cart!",
                  }))
                  :
                   addITEMtocart(course)}}
                className="btn_detail1" 
                >
                ADD TO CART
                </button>
                <button
                style = {{width:"48%"}}
                onClick={ ()=>
                  isPresentInwishlist(course)?
                  dispatch(showModal({
                    title: "Already Exist in WishList",
                    showButton: false,
                    isSuccessAlert: false,
                    subTitle: "Course " + course?.course_name + " already exist in WishList!",
                  }))
                  :
                  addITEMtowishlist(course)
                }
                className="white_detail1" 
                >
                ADD TO WISHLIST
                </button>
            </div>
          </div>
        </div>
      </div>
      <div className="bottom_detail">
        <br />
      </div>
    </div>
  );
};

export default CourseDetail;
