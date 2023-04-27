import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    updateProfile,
    onAuthStateChanged,
  } from "firebase/auth";
 import { auth, db } from "../../firebase/config";
  import { setDoc, doc } from "firebase/firestore";
import { authSlice } from "./slice";
  const { updateUserProfile, authStateChange, authSignOut } = authSlice.actions;
  
  export const authSignUpUser =
    ({ email, password, login }) =>
    async (dispatch, getState) => {
      try {
        const userCredential = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );
  
        const user = userCredential.user;
  
        await updateProfile(user, {
          displayName: login,
        });
  
        await setDoc(doc(db, "users/" + user.uid), {
          uid: user.uid,
          displayName: login,
          email,
        });
  
        const userUpdateProfile = {
          login: user.displayName,
          userId: user.uid,
          email: user.email,
        };
        console.log(login);
        dispatch(updateUserProfile(userUpdateProfile));
      } catch (error) {
        alert(error.message);
        console.log("error", error);
        console.log("error.message", error.message);
      }
    };
  
  export const authSignInUser =
    ({ email, password }) =>
    async (dispatch, getState) => {
      try {
        await signInWithEmailAndPassword(auth, email, password);
      } catch (error) {
        alert(error.message);
        console.log("error", error);
        console.log("error.code", error.code);
        console.log("error.message", error.message);
      }
    };
  
  export const authSignOutUser = () => async (dispatch, getState) => {
    try {
      await signOut(auth);
      dispatch(authSignOut());
      dispatch(authStateChange({ stateChange: false }));
    } catch (error) {
      console.log(error);
    }
  };
  
  export const authStateChangeUser = () =>  (dispatch, getState) => {
    try {
       onAuthStateChanged(auth, (user) => {
        if (user) {
          const userUpdateProfile = {
            login: user.displayName,
            userId: user.uid,
            email: user.email,
          };
  
          dispatch(updateUserProfile(userUpdateProfile));
          dispatch(authStateChange({ stateChange: true }));
        }
      });
    } catch (error) {
      console.log(error);
    }
  };