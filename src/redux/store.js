import { configureStore } from "@reduxjs/toolkit";
import RootReducer from "./reducer";

const store = configureStore({
  reducer: {
    user: RootReducer,
  },
});

export default store;
