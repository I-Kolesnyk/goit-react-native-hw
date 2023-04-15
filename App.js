import { View } from "react-native";
import Layout from "./screens/Layout";
import { appStyles } from "./styles";

export default function App() {
  return (
    <View style={appStyles.container}>
      <Layout />
    </View>
  );
}