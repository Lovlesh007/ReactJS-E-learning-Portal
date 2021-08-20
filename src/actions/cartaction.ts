export const ADD_CART_ITEM: string = "ADD_CART_ITEM";
export const REMOVE_CART_ITEM: string = "REMOVE_CART_ITEM";


//Add to cart Action
export const addToCart = (course:any) => {
  return {
    type: "ADD_CART_ITEM",
    payload: course,
  };
};

//Remove to Cart Action
export const removeFromCart = (course: any) => {
  return {
    type: "REMOVE_CART_ITEM",
    payload: course,
  };
};
