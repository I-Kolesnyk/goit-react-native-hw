import { StyleSheet } from "react-native";

export const homeScreenStyles = StyleSheet.create({
    container: {
      flex: 1,
  
      paddingTop: 32,
      paddingBottom: 32,
      paddingLeft: 16,
      paddingRight: 16,
      backgroundColor: "#ffffff",
      justifyContent: "flex-start",
    },
    userBox: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "flex-start",
      alignItems: "center",
      gap: 8,
      marginBottom: 100,
    },
    userName: {
      fontFamily: "Roboto-Medium",
      fontSize: 13,
      fontWeight: 700,
      lineHeight: 15,
      color: "#212121",
      textTransform: "capitalize",
    },
    userEmail: {
      fontFamily: "Roboto-Regular",
      fontSize: 11,
      lineHeight: 13,
      color: "#212121",
      opacity: 0.8,
    },
    imgContainer: {
      width: 60,
      height: 60,
      backgroundColor: "#F6F6F6",
      borderRadius: 16,
    },
  });