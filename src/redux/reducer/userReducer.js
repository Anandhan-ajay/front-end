import { createReducer } from "@reduxjs/toolkit";
import { LoginUserData } from "../actions";

const initialState = {
  name: "",
  email: "",
};

const userReducer = createReducer(initialState, (builder) => {
  builder.addCase(LoginUserData, (state, action) => {
    console.log("reducer from userreduss", state, action.payload.data);
    state.name = action.payload.data.name;
    state.email = action.payload.data.email;
  });
});

export default userReducer;
