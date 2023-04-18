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
import React, { useState } from "react";
import Layout from "../Layout";
import { authScreenStyles } from "../../styles";

const initialFormState = {
  login: "",
  email: "",
  password: "",
};

export default function RegistrationScreen() {
  const [isShownKeyboard, setIsShownKeyboard] = useState(false);
  const [dimensions, setDimensions] = useState(Dimensions.get("window").width);
  const [user, setUser] = useState(initialFormState);
  const [isPasswordShown, setIsPasswordShown] = useState(true);

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

  const handleSignIn = () => {
    setIsNewUser(false);
  };

  return (
    <Layout>
      <View
        style={{
          ...authScreenStyles.formContainer,
          paddingBottom: isShownKeyboard ? 32 : 78,
          width: dimensions,
        }}
      >
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
          <Text style={authScreenStyles.text}>Registration</Text>
          <View style={{ width: dimensions - 16 * 2 }}>
            <TextInput
              style={authScreenStyles.input}
              value={user.login}
              placeholder={"Login"}
              placeholderTextColor={"#BDBDBD"}
              onFocus={() => {
                setIsShownKeyboard(true);
              }}
              onChangeText={(value) =>
                setUser((prevState) => ({ ...prevState, login: value }))
              }
            />
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
              <Text style={authScreenStyles.buttonTitle}>Register</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleSignIn}>
              <Text style={authScreenStyles.redirectionText}>
                Already have account? Sign in
              </Text>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </View>
    </Layout>
  );
}
