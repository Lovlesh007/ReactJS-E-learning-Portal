import {useState } from "react";
import Coursedeatil from "../components/Coursedetail/coursedetail";
import TitleBar from "../components/TitleBar/TitleBar";
import "./courses_style.css";
import icon from "../assets/images/search.svg";
import courseData from "../mockdata.json";
import { useSelector } from "react-redux";
import course_image from "../assets/images/courselogo.png";
import { Link } from "react-router-dom";

const Courses = () => {
    const myState  = useSelector((state:any) => state.cartReducer);
    // const wishlistState = useSelector((state:any) => state.wishListReducer)
    // const dispatch = useDispatch();
      let sortArray = courseData.all_courses;
      const [sortType, setSortType] = useState([...sortArray]);
      let TotalCartPrice = 0;
  //console.log("MYSTATE",myState);
      let searchInput:any;
      let searchArray:any = [];
      // let variable_empty  = false;
      // let noresultfound= (e:any) =>{
      //     variable_empty = searchInput.length >0 &&  searchArray.length<=0;
      // }
    let searchCourses = (e:any) => {
      // noresultfound(e);
    searchInput = e.target.value;
    // console.log(searchInput)
    searchInput=searchInput.toUpperCase();
    courseData.all_courses.map((course) => {
     // eslint-disable-next-line no-lone-blocks
     {(searchInput===course.instructor_name.toUpperCase()||searchInput===course.course_title)&&
     searchArray.push(course)
     }
    })
    // console.log(searchArray.length);
    // eslint-disable-next-line no-lone-blocks
    {searchArray.length>0&&
    setSortType([...searchArray]);
    }
    // eslint-disable-next-line no-lone-blocks
    {
        searchArray.length<=0&&
        setSortType([...sortArray]);  
    }
    // eslint-disable-next-line no-lone-blocks
    {
      searchInput.length >0 &&  searchArray.length<=0 && setSortType([]);  
    }
    }


  return (
    <div className="course">
      <TitleBar></TitleBar>
      <div className="container">

        <div className="leftContainer">
        <div className = "headingoflist">
           <p>All Courses</p> 
          <div className="optionContainer">
            <select className="customSelect" onChange={(e) => {
                  if(e.target.value === 'High to Low'){
                    sortType.sort((a, b) => (a.discountedPrice < b.discountedPrice) ? 1 : -1)
                      setSortType([...sortType]);
                  }
                  if(e.target.value === 'Low to High'){
                    sortType.sort((a, b) => (a.discountedPrice > b.discountedPrice) ? 1 : -1)
                      setSortType([...sortType]);
                  }
                  else if(e.target.value === 'Course Price')
                    setSortType([...sortArray]);
                  
            }}>
              <option>Course Price</option>
              <option>Low to High</option>
              <option>High to Low</option>
            </select>
            </div>
          </div>
          <div className = "listofCourses">
            {/* {
               variable_empty &&
               <div>hellllllllll</div>
            } */}
          {
          sortType.map((course) => {
            return(
            <Coursedeatil 
             key = {course.course_id}
            course = {course}
            text = "courses_page"
            />
            );
          })
          }
         
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
                    // name="search"​​​
                    onChange = {(e) => searchCourses(e)}
                  />
              </div>
                  <div className="searchBtn">
                    <img className="searchimage" src={icon} alt ="search icon"/>
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
                      <div className = "cart_image_dashboard"><img className="image_cart_course" src={course_image} alt ="Image_Course"></img></div>
                      <div className = "cart_course_name">{course.course_name}</div>
                      </div>
                      <div className = "course_cart_price">
                      Rs {course.discountedPrice}/-  </div>
                      {/* <button onClick = {() => dispatch(removeFromCart(course))}>Delete</button> */}
                      
                      </div>
                       
                    );
                   
              })
              
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
