import { combineReducers} from "redux";
import {cartReducer} from "./cartreducer";
import {wishListReducer} from './wishlistreducer';
import {modalReducer} from './modalreducer';
const rootReducers = combineReducers({
  cartReducer,wishListReducer,modalReducer,
});

export default rootReducers;
