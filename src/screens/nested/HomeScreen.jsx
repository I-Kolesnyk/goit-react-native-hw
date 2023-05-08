import { useSelector } from "react-redux";
import { Text, View, Image } from "react-native";

import { selectEmail, selectLogin } from "../../redux/auth/selectors";

import Layout from "../Layout";
import Button from "../../components/Button";

import { homeScreenStyles } from "../../styles";

export default function HomeScreen({ navigation }) {
  const login = useSelector(selectLogin);
  const email = useSelector(selectEmail);

  return (
    <Layout>
      <View style={homeScreenStyles.container}>
        <View style={homeScreenStyles.userBox}>
          <Image style={homeScreenStyles.imgContainer} />
          <View>
            <Text style={homeScreenStyles.userName}>{login}</Text>
            <Text style={homeScreenStyles.userEmail}>{email}</Text>
          </View>
        </View>
        <Button title="Go to map" onPress={() => navigation.navigate("Map")} />
        <Button
          title="Go to comments"
          onPress={() => navigation.navigate("Comments")}
        />
      </View>
    </Layout>
  );
}
