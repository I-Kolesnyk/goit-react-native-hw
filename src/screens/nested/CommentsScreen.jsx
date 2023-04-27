import { StyleSheet, Text, View } from "react-native";

import Layout from "../Layout";

export default function CommentsScreen() {
  return (
    <Layout>
      <View style={styles.container}>
        <Text style={styles.text}>Comments</Text>
      </View>
    </Layout>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 30,
    color: "#ffffff",
  },
});
