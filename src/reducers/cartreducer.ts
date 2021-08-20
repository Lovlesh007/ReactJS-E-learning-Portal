
const cart : Object[] = [];
export const cartReducer = (state = cart, action:any) => {
  switch (action.type) {

    case "ADD_CART_ITEM": {
      const tempArr = [...state];
      tempArr.push(action.payload);
      return tempArr;
    }

    case "REMOVE_CART_ITEM": {
        let currentcart = [...state];
        currentcart = currentcart.filter((item:any)=>
         item.course_id !== action.payload.course_id
        )
        return currentcart;
  }
    default:
      return state;
  }
 
};
