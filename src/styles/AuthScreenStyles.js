import { StyleSheet } from "react-native";

export const authScreenStyles = StyleSheet.create({
  formContainer: {   
    paddingTop: 92,
    justifyContent: "flex-end",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,   
  },
  text: {
    marginBottom: 33,
    fontFamily: "Roboto-Medium",
    fontSize: 30,
    textAlign: "center",
    color: "#212121",
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
    fontFamily: "Roboto-Regular",
  },
  passwordInputWrapper: {
    position: "relative",
  },
  passwordShownButton: {
    position: "absolute",
    right: 15,
    top: 15,
  },
  passwordShownButtonTitle: {
    fontFamily: "Roboto-Regular",
    textAlign: "center",
    fontSize: 16,
    lineHeight: 19,
    color: "#1B4371",
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
    textAlign: "center",
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    lineHeight: 19,
    color: "#1B4371",
  },
});
