import actionTypes from "./actionType";

import { createAction } from "@reduxjs/toolkit";

export const LoginUserData = createAction(
  actionTypes.FetchUserData,
  (payload) => ({
    type: "FetchUserData",
    payload: payload,
  })
);

export default LoginUserData;
