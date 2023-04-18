import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View } from "react-native";
import Layout from "./screens/Layout";
import LoginScreen from './screens/auth/LoginScreen';
import RegistrationScreen from './screens/auth/RegistrationScreen';
import { appStyles } from "./styles";

const AuthStack = createNativeStackNavigator();

export default function App() {
  <script src="http://192.168.0.196:8097"></script>
  return (
    <NavigationContainer>
    <View style={appStyles.container}>
      <AuthStack.Screen name="Login" component={ LoginScreen}/>
      {/* // <Layout /> */}
    </View>
    </NavigationContainer>
  );
}