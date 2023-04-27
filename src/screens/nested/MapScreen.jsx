import { View, Text, StyleSheet } from "react-native";

import Layout from "../Layout";

export default function MapScreen() {
  return (
    <Layout>
      <View style={styles.container}>
        <Text style={styles.text}>Map screen</Text>
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
