import { combineReducers } from "redux";
import userReducer from "./userReducer";

const RootReducer = combineReducers({
  userReducer: userReducer,
});

export default RootReducer;
