export const ADD_WISHLIST_ITEM: string = "ADD_WISHLIST_ITEM";
export const REMOVE_WISHLIST_ITEM: string = "REMOVE_WISHLIST_ITEM";

//Add to Wish List action
export const addToWishList = (course:any) => {
  return {
    type: "ADD_WISHLIST_ITEM",
    payload: course,
  };
};
// Remove from WishList action
export const removeFromWishList = (course: any) => {
  return {
    type: "REMOVE_WISHLIST_ITEM",
    payload: course,
  };
};
