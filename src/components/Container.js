import { NavigationContainer } from "@react-navigation/native";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { authStateChangeUser } from "../redux/auth/operations";
import { useRouter } from "../src/router";

const Container = () => {
  const { stateChange } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authStateChangeUser());
  }, []);

  const routing = useRouter(stateChange);
  useEffect(() => {}, []);
  return <NavigationContainer>{routing}</NavigationContainer>;
};

export default Container;