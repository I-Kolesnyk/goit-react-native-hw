import { StyleSheet } from "react-native";

export const createPostStyles = StyleSheet.create({
  container: {
    backgroundColor: "#ffffff",
    flex: 1,
  },
  form: {
    position: "relative",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 32,
    marginBottom: 32,
  },
  input: {
    fontFamily: "Roboto-Regular",
    width: "100%",
    borderBottomWidth: 1,
    borderColor: "#BDBDBD",
    height: 50,
    color: "#212121",
    textAlign: "left",
    fontSize: 16,
    marginBottom: 16,
    lineHeight: 19,
    paddingLeft: 5,
  },
  btn: {
    backgroundColor: "#F6F6F6",
    borderRadius: 100,
    paddingTop: 16,
    paddingBottom: 16,
  },
  btnText: {
    fontFamily: "Roboto-Regular",
    textAlign: "center",
    color: "#BDBDBD",
    fontSize: 16,
    lineHeight: 19,
  },
  mapIcon: {
    position: "absolute",
    bottom: 30,
    left: 0,
  },
  iconBox: {
    backgroundColor: "#F6F6F6",
    borderRadius: 20,
    width: 70,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    marginTop: 90,
    marginBottom: 15,
  },
  camera: {
    position: "relative",
    width: "100%",
    height: 240,
    borderRadius: 8,
    marginBottom: 8,
  },
  photoIcon: {
    alignSelf: "center",
  },
  postImage: {
    width: "100%",
    height: 240,
    borderRadius: 8,
    marginBottom: 8,
  },
});
