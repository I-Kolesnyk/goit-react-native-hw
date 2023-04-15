import React, { useState, useEffect, useCallback } from "react";
import {
  View,
  ImageBackground,
  TouchableWithoutFeedback,
  Keyboard,
  Dimensions,  
} from "react-native";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { layoutStyles } from "../styles";
import RegistrationScreen from "./RegistrationScreen";
import LoginScreen from "./LoginScreen";

SplashScreen.preventAutoHideAsync();

export default function Layout() {
  const [isShownKeyboard, setIsShownKeyboard] = useState(false);
  const [dimensions, setDimensions] = useState(Dimensions.get("window").width);
  const [isNewUser, setIsNewUser] = useState(true);

  useEffect(() => {
    const subscription = Dimensions.addEventListener("change", () => {
      setDimensions(Dimensions.get("window").width);
    });
    return () => subscription?.remove();
  });

  useEffect(() => {
    const showSubscription = Keyboard.addListener("keyboardDidShow", () => {
      setIsShownKeyboard(true);
    });
    const hideSubscription = Keyboard.addListener("keyboardDidHide", () => {
      setIsShownKeyboard(false);
    });
    return () => {
      showSubscription.remove();
      hideSubscription.remove();
    };
  }, []);
  const handleKeyboardHide = () => {
    setIsShownKeyboard(false);
    Keyboard.dismiss();
  };

  const [fontsLoaded] = useFonts({
    "Roboto-Regular": require("../assets/fonts/Roboto-Regular.ttf"),
    "Roboto-Medium": require("../assets/fonts/Roboto-Medium.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={{ ...layoutStyles.container }} onLayout={onLayoutRootView}>
      <TouchableWithoutFeedback onPress={handleKeyboardHide}>
        <ImageBackground
          style={{
            ...layoutStyles.image,
            width: dimensions,
          }}
          source={require("../assets/images/background.jpg")}
          resizeMode="cover"
        >
          {isNewUser ? (
            <RegistrationScreen
              dimensions={dimensions}
              setIsShownKeyboard={setIsShownKeyboard}
              isShownKeyboard={isShownKeyboard}
              setIsNewUser={setIsNewUser}
            />
          ) : (
            <LoginScreen
              dimensions={dimensions}
              setIsShownKeyboard={setIsShownKeyboard}
              isShownKeyboard={isShownKeyboard}
              setIsNewUser={setIsNewUser}
            />
          )}
        </ImageBackground>
      </TouchableWithoutFeedback>
    </View>
  );
}
