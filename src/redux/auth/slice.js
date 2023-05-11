import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import { signUp, signIn, isLoggedIn, logOut, changeAvatar } from "./operations";

const initialState = {
  id: "",
  email: "",
  username: "",
  avatar: "",
  isAuth: false,
  isLoading: false,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(signUp.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.isAuth = true;
        state.email = payload.email;
        state.username = payload.displayName;
        state.id = payload.uid;
        state.avatar = payload.photoURL;
      })
      .addCase(signIn.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.isAuth = true;
        state.email = payload.email;
        state.username = payload.displayName;
        state.id = payload.uid;
        state.avatar = payload.photoURL;
      })
      .addCase(isLoggedIn.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.isAuth = true;
        state.email = payload.email;
        state.username = payload.displayName;
        state.id = payload.id;
        state.avatar = payload.avatar;
      })
      .addCase(logOut.fulfilled, (state) => {
        state.isLoading = false;
        state.isAuth = false;
        state.avatar = "";
        state.email = "";
        state.id = "";
        state.username = "";
      })
      .addCase(changeAvatar.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.avatar = payload.photoURL;
      })
      .addMatcher(isAnyOf(...getActions("pending")), handlePending)
      .addMatcher(isAnyOf(...getActions("rejected")), handleRejected);
  },
});

const handlePending = (state) => {
  state.isLoading = true;
  state.error = null;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const extraActions = [signUp, signIn, isLoggedIn, logOut, changeAvatar];

const getActions = (type) => extraActions.map((action) => action[type]);

export const authReducer = authSlice.reducer;
