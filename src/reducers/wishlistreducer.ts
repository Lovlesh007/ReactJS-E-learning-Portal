
const wishList : Object[] = [];
export const wishListReducer = (state = wishList, action:any) => {
  switch (action.type) {

    case "ADD_WISHLIST_ITEM": {
      const tempArr = [...state];
      tempArr.push(action.payload);
      return tempArr;
    }

    case "REMOVE_WISHLIST_ITEM": {
        let currentwishlist = [...state];
        currentwishlist = currentwishlist.filter((item:any)=>
         item.course_id !== action.payload.course_id
        )
        return currentwishlist;
  }
    default:
      return state;
  }
 
};
