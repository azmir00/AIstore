import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

// Reducers
import { cartReducer } from "./reducers/CartReducers";
import {
  getProductDetailsReducer,
  getProductsReducer,
} from "./reducers/ProductReducers";
import { userSigninReducer } from "./reducers/UserReducers";

const initialState = {
  userSignin: {
    userInfo: localStorage.getItem("userInfo")
      ? JSON.parse(localStorage.getItem("userInfo"))
      : null,
  },
};

const reducer = combineReducers({
  cart: cartReducer,
  getProducts: getProductsReducer,
  getProductDetails: getProductDetailsReducer,
  userSignin: userSigninReducer,
});

const middleware = [thunk];

const store = createStore(
  reducer,
  // initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
