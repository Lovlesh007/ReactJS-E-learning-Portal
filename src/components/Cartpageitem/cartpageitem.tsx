import './cartpageitem_style.css';
import { useDispatch } from "react-redux";
import React from "react";
import DeleteIcon from "../../assets/images/delete.svg";
import Img from "../../assets/images/courselogo.png";
import { showModal } from '../../actions/modalaction';
import { removeFromCart } from '../../actions/cartaction';
import { addToWishList } from '../../actions/wishlistaction';

const CartPageItem = (props:any) => {
  // const getPriceText = (price: number): string => {
  //   return "Rs " + price + "/-";
  // };

  const dispatch = useDispatch();

  const removeItemFromCart = () => {
    dispatch(removeFromCart(props.course));
    dispatch(
      showModal({
        title: "Course successfully removed from cart",
        showButton: true,
        isSuccessAlert: true,
      })
    );
  };

  const moveItemToWishlist = () => {
    dispatch(removeFromCart(props.course));
    dispatch(addToWishList(props.course));
    dispatch(
      showModal({
        title: "Course successfully moved to wishlist",
        showButton: true,
        isSuccessAlert: true,
      })
    );
  };

  // const cartItems = useSelector((state:any) => state.cartReducer);

  // const isAddedToCart = cartItems.includes(props.course);

  return (
    <div className="itemContainer_cartpageitem">
      <img className="image_cartpageitem" src={Img} alt = "cartitem"></img>

      <div className="titleContainer_cartpageitem">
        <h3 className="title_cartpageitem">{props.course.course_name}</h3>
        <p className="author_cartpageitem">{props.course.instructor_name}</p>
      </div>

      <p className="moveTowishlist_cartpageitem" onClick={moveItemToWishlist}>
        Move to Wishlist
      </p>

      <p className="currentPrice_cartpageitem">
        {/* {course.discountedPrice > 0
          ? getPriceText(course.discountedPrice)
          : getPriceText(course.price)} */}
          Rs {props.course.discountedPrice}/-
      </p>

      <img
        className="delete_cartpageitem"
        src={DeleteIcon}
        alt="delete from wishlist"
        onClick={removeItemFromCart}
      ></img>
    </div>
  );
};

export default CartPageItem;
