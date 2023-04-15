import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Platform,
  KeyboardAvoidingView,
  Keyboard,
} from "react-native";
import React, { useState } from "react";
import { authScreenStyles } from "../styles";

const initialFormState = {
  email: "",
  password: "",
};

export default function LoginScreen({
  dimensions,
  setIsShownKeyboard,
  isShownKeyboard,
  setIsNewUser,
}) {
  const [user, setUser] = useState(initialFormState);
  const [isPasswordShown, setIsPasswordShown] = useState(true);

  const handleKeyboardHideOnBtnClick = () => {
    setIsShownKeyboard(false);
    Keyboard.dismiss();
    console.log(user);
    setUser(initialFormState);
  };

  const handlePasswordVisibility = () => {
    if (!isPasswordShown) {
      setIsPasswordShown(true);
    } else {
      setIsPasswordShown(false);
    }
  };

  const handleSignUp = () => {
    setIsNewUser(true);
  };

  return (
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
            value={user.email}
            placeholder={"Email"}
            placeholderTextColor={"#BDBDBD"}
            onFocus={() => {
              setIsShownKeyboard(true);
            }}
            onChangeText={(value) =>
              setUser((prevState) => ({ ...prevState, email: value }))
            }
          />
          <View style={authScreenStyles.passwordInputWrapper}>
            <TextInput
              style={authScreenStyles.input}
              value={user.password}
              placeholder={"Password"}
              placeholderTextColor={"#BDBDBD"}
              secureTextEntry={isPasswordShown}
              onFocus={() => {
                setIsShownKeyboard(true);
              }}
              onChangeText={(value) =>
                setUser((prevState) => ({ ...prevState, password: value }))
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
          <TouchableOpacity onPress={handleSignUp}>
            <Text style={authScreenStyles.redirectionText}>
              Don't have account? Sign up
            </Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
}
