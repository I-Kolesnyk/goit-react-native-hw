import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TextInput,
  Button,
  TouchableOpacity,
  Platform,
  KeyboardAvoidingView,
  Keyboard,
  TouchableWithoutFeedback,
  Dimensions,
} from "react-native";
import React, { useState, useEffect } from "react";

const initialFormState = {
  login: "",
  email: "",
  password: "",
};

export default function RegistrationScreen() {
  const [isShownKeyboard, setIsShownKeyboard] = useState(false);
  const [user, setUser] = useState(initialFormState);
  const [dimension, setDimension] = useState(
    Dimensions.get("window").width - 16 * 2
  );

  useEffect(() => {
    const onChange = () => {
      const width = Dimensions.get("window").width - 16 * 2;
      setDimension(width);
    };
    Dimensions.addEventListener("change", onChange);
    return () => {
      Dimensions.removeEventListener("change", onChange);
    };
  }, []);

  const handleKeyboardHide = () => {
    setIsShownKeyboard(false);
    Keyboard.dismiss();
  };

  const handleKeyboardHideOnBtnClick = () => {
    setIsShownKeyboard(false);
    Keyboard.dismiss();
    console.log(user);
    setUser(initialFormState);
  };

  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={handleKeyboardHide}>
        <ImageBackground
          style={styles.image}
          source={require("../assets/images/background.jpg")}
          resizeMode="cover"
        >
          <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
          >
            <Text style={styles.text}>Registration</Text>
            <View
              style={{
                ...styles.formContainer,
                marginBottom: isShownKeyboard ? 40 : 0,
                width: dimension,
              }}
            >
              <TextInput
                style={styles.input}
                value={user.login}
                placeholder={"Login"}
                onFocus={() => {
                  setIsShownKeyboard(true);
                }}
                onChangeText={(value) =>
                  setUser((prevState) => ({ ...prevState, login: value }))
                }
              />
              <TextInput
                style={styles.input}
                value={user.email}
                placeholder={"Email"}
                onFocus={() => {
                  setIsShownKeyboard(true);
                }}
                onChangeText={(value) =>
                  setUser((prevState) => ({ ...prevState, email: value }))
                }
              />
              <TextInput
                style={styles.input}
                value={user.password}
                placeholder={"Password"}
                secureTextEntry={true}
                onFocus={() => {
                  setIsShownKeyboard(true);
                }}
                onChangeText={(value) =>
                  setUser((prevState) => ({ ...prevState, password: value }))
                }
              />
              <TouchableOpacity
                style={styles.button}
                activeOpacity={0.8}
                onPress={handleKeyboardHideOnBtnClick}
              >
                <Text style={styles.buttonTitle}>Register</Text>
              </TouchableOpacity>
              <Text style={styles.redirectionText}>Already have account? Sign in</Text>
            </View>
          </KeyboardAvoidingView>
        </ImageBackground>
      </TouchableWithoutFeedback>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  text: {
    marginBottom: 30,
    fontFamily: "Roboto-Medium",
    fontSize: 30,
    textAlign: "center",
    color: "#212121",
  },
  image: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  formContainer: {
    flex: 1,
    justifyContent: "center",   
    backgroundColor: "#FFFFFF", 
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  input: {
    marginBottom: 16,
    paddingLeft: 16,
    height: 50,
    color: "#212121",
    backgroundColor: "#F6F6F6",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "#E8E8E8",
    borderRadius: 8,
  },
  button: {
    marginTop: 40,
    height: 51,
    backgroundColor: "#FF6C00",
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
    fontSize: 18,
  },
  buttonTitle: {
    fontFamily: "Roboto-Regular",
    textAlign: "center",
    fontSize: 16,
    color: "#fff",
  },
  redirectionText: {
    marginTop: 16,
    textAlign: 'center',
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    color: '#fff',
  }
});
