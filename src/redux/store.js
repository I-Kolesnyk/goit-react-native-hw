import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { applyMiddleware } from "redux";
import thunk from "redux-thunk";

import { authSlice } from "./auth/slice";

const rootReducer = combineReducers({
  [authSlice.name]: authSlice.reducer,
});

export const store = configureStore(
  {
    reducer: rootReducer,
  },
  applyMiddleware(thunk)
);
