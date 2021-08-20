import './cart_styles.css';
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import courseData from '../mockdata.json';
import { removeFromCart } from '../actions/cartaction';
import { showModal } from '../actions/modalaction';
import TitleBar from '../components/TitleBar/TitleBar';
import Coursedeatil from '../components/Coursedetail/coursedetail';
import CartPageItem from '../components/Cartpageitem/cartpageitem';
const Cart = () => {
  const dispatch = useDispatch();
 const [disabled,setDisabled] = useState(true);
  useEffect(() =>{
    totalCartPrice && setDisabled(false);
    !totalCartPrice && setDisabled(true);
  })
  const courses = courseData.all_courses;
  const cartItems = useSelector((state: any) => state.cartReducer);

  let totalCartPrice = 0;
  let amountSaved = 0;

  const getPriceText = (price: number): string => {
    return "Rs " + price + "/-";
  };

//clearing cart Items on Checkout
  const clearCartitems = () => {
    // eslint-disable-next-line array-callback-return
    cartItems.map((CartItem:any) => {
      dispatch(removeFromCart(CartItem));
    });
  };
  
  const checkoutCart = () => {
    dispatch(
      showModal({
        title: "You have successfully placed your order",
        showButton: true,
        isSuccessAlert: true,
      })
    );
    clearCartitems();
  };

  return (
    <div className="course_cart">
      <TitleBar text = 'Shopping Cart'></TitleBar>
      <div className="container_cart">
        <div className="leftContainer_cart">
          <div className="optionContainer_cart">
            <h4 className="pageTitle_cart">Cart</h4>
          </div>
         
          <div className="listContainer_cart">
            {cartItems.map((cartItem:any) => (
                <CartPageItem course={cartItem}>
                    {
                  (totalCartPrice =
                    totalCartPrice +
                    (cartItem.discountedPrice > 0
                      ? cartItem.discountedPrice
                      : cartItem.price))
                }
                 {cartItem.discountedPrice > 0 &&
                  (amountSaved =
                    amountSaved + (cartItem.price - cartItem.discountedPrice))}
                </CartPageItem>
            ))}
          </div>
              
          <div className="recommendedContainer_cart">
            <h3>Recommended Courses</h3>
            {courses.slice(0, 2).map((course) => (
              <Coursedeatil course = {course} key={course.course_id} ></Coursedeatil>
            ))}
          </div>
        </div>
        <div className="rightContainer_cart">
          <div className="totalContainer_cart">
            <p className="labelTotal_cart">Total Cart Value</p>
            <p className="totalPrice_cart">{getPriceText(totalCartPrice)}</p>
            <p className="savedAmount_cart">
              You have saved {getPriceText(amountSaved)}
            </p>
            <button disabled = {disabled}
                onClick={checkoutCart}
                className={disabled?"btn_cart_disabled":"btn_cart"}
                >
                CHECKOUT
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
