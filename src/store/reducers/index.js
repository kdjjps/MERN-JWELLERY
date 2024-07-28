import { combineReducers } from "redux";
import diamondReducer from "./diamondReducer";
import jewelryReducer from "./jewelryReducer";
import cartReducer from "./cartReducer";
import flashReducer from "./flashReducer";
import wishlistReducer from "./wishlistReducer";
import loadingReducer from "./loadingReducer";

export default combineReducers({
    diamondReducer,
    jewelryReducer,
    cartReducer,
    flashReducer,
    wishlistReducer,
    loadingReducer
  });