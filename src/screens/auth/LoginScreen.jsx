import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Platform,
  KeyboardAvoidingView,
  Keyboard,
  Dimensions,
} from "react-native";
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

import Layout from "../../../screens/Layout";
import { authSignInUser } from "../../redux/auth/operations";
import { authScreenStyles } from "../../styles";

const initialFormState = {
  email: "",
  password: "",
};

export default function LoginScreen({ navigation }) {
  const [state, setState] = useState(initialFormState);
  const [isPasswordShown, setIsPasswordShown] = useState(false);
  const [isShownKeyboard, setIsShownKeyboard] = useState(false);
  const [dimensions, setDimensions] = useState(Dimensions.get("window").width);
  const dispatch = useDispatch();

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

  const handleKeyboardHideOnBtnClick = () => {
    const { password, email } = state;
    if (!email || !password) {
      alert("Please fill in all fields");
      return;
    }
    setIsShownKeyboard(false);
    Keyboard.dismiss();
    dispatch(authSignInUser(state));
  };

  const handlePasswordVisibility = () => {
    setIsPasswordShown((prevState) => !prevState);
  };

  return (
    <Layout>
      <View
        style={{
          ...authScreenStyles.formContainer,
          paddingBottom: isShownKeyboard ? 32 : 78,
          paddingTop: 32,
          width: dimensions,
        }}
      >
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
          <Text style={authScreenStyles.text}>Log in</Text>
          <View style={{ width: dimensions - 16 * 2 }}>
            <TextInput
              style={authScreenStyles.input}
              value={state.email}
              placeholder={"Email"}
              placeholderTextColor={"#BDBDBD"}
              onFocus={() => {
                setIsShownKeyboard(true);
              }}
              onChangeText={(value) =>
                setState((prevState) => ({ ...prevState, email: value }))
              }
            />
            <View style={authScreenStyles.passwordInputWrapper}>
              <TextInput
                style={authScreenStyles.input}
                value={state.password}
                placeholder={"Password"}
                placeholderTextColor={"#BDBDBD"}
                secureTextEntry={isPasswordShown}
                onFocus={() => {
                  setIsShownKeyboard(true);
                }}
                onChangeText={(value) =>
                  setState((prevState) => ({
                    ...prevState,
                    password: value,
                  }))
                }
              />
              <TouchableOpacity
                style={authScreenStyles.passwordShownButton}
                onPress={handlePasswordVisibility}
              >
                <Text style={authScreenStyles.passwordShownButtonTitle}>
                  {isPasswordShown ? "Show" : "Hide"}
                </Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity
              style={authScreenStyles.button}
              activeOpacity={0.8}
              onPress={handleKeyboardHideOnBtnClick}
            >
              <Text style={authScreenStyles.buttonTitle}>Log in</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate("Registration")}
            >
              <Text style={authScreenStyles.redirectionText}>
                Don't have account? Sign up
              </Text>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </View>
    </Layout>
  );
}
