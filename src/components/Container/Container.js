import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";

import { useRoute } from "../../routing";
import { isLoggedIn } from "../../redux/auth/operations";
import { useSelectIsAuth } from "../../../hooks";

export default function Container() {
  const dispatch = useDispatch();
  const user = useSelectIsAuth();

  useEffect(() => {
    dispatch(isLoggedIn());
  }, []);

  const [fontsLoaded] = useFonts({
    "Roboto-regular": require("../../assets/fonts/Roboto-Regular.ttf"),
    "Roboto-medium": require("../../assets/fonts/Roboto-Medium.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  const routing = useRoute(user);

  return <NavigationContainer>{routing}</NavigationContainer>;
}