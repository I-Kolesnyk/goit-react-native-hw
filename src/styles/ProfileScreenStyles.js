import { StyleSheet } from "react-native";

export const profileScreenStyles = StyleSheet.create({
    container: {
      backgroundColor: "#ffffff",
      borderTopLeftRadius: 25,
      borderTopRightRadius: 25,
      height: 579,
    },
    imgContainer: {
      position: "absolute",
      left: "35%",
      top: -60,
      width: 120,
      height: 120,
      backgroundColor: "#F6F6F6",
      borderRadius: 16,
    },
    icon: {
      position: "absolute",
      right: 125,
      bottom: -50,
      zIndex: 100,
      borderRadius: 50,
    },
    headerTitle: {
      fontFamily: "Roboto-Medium",
      fontSize: 30,
      lineHeight: 35,
      textAlign: "center",
      letterSpacing: 0.01,
      color: "#212121",
      paddingTop: 92,
      paddingBottom: 32,
      textTransform: "capitalize",
    },
    logOut: {
      color: "#BDBDBD",
      paddingRight: 16,
      position: "absolute",
      right: 0,
      top: 24,
      zIndex: 100,
    },
  });