import React, { useState, useEffect, useRef } from "react";
import { View, Text, StyleSheet, Image, Button } from "react-native";

const CreatePostsScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Create Post</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#c6c6c6",
  },
  button: {
    height: 60,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontWeight: "bold",
    fontSize: 16,
    color: "#f1f1f1",
    marginLeft: 10,
  },
  camera: {
    flex: 1,
    // height: 300,
    marginTop: 60,
    justifyContent: "center",
  },
});

export default CreatePostsScreen;
