import { useDispatch } from "react-redux";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { TouchableOpacity } from "react-native";

import { authSignOutUser } from "../../redux/auth/operations";

import HomeScreen from "../nested/HomeScreen";
import MapScreen from "../nested/MapScreen";
import CommentsScreen from "../nested/CommentsScreen";

import ArrowIcon from "react-native-vector-icons/AntDesign";
import LogOutIcon from "react-native-vector-icons/MaterialIcons";

import { postsScreenStyles } from "../../styles";

export default function PostsScreen({ navigation }) {
  const NestedStack = createNativeStackNavigator();
  const dispatch = useDispatch();

  const signOut = () => {
    dispatch(authSignOutUser());
  };

  return (
    <NestedStack.Navigator>
      <NestedStack.Screen
        options={{
          headerTitle: "Posts",
          headerTitleAlign: "center",
          headerRight: () => (
            <TouchableOpacity activeOpacity={0.8} onPress={signOut}>
              <LogOutIcon
                style={postsScreenStyles.icon}
                name="logout"
                size={24}
              />
            </TouchableOpacity>
          ),
        }}
        name="Home"
        component={HomeScreen}
      />
      <NestedStack.Screen
        options={{
          headerTitle: "Location",
          headerTitleAlign: "center",
          headerLeft: () => (
            <TouchableOpacity
              activeOpacity={0.5}
              onPress={() => {
                navigation.goBack();
              }}
            >
              <ArrowIcon
                style={postsScreenStyles.icon}
                name="arrowleft"
                size={24}
              />
            </TouchableOpacity>
          ),
        }}
        name="Map"
        component={MapScreen}
      />
      <NestedStack.Screen
        options={{
          headerTitle: "Comments",
          headerTitleAlign: "center",
          headerLeft: () => (
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => {
                navigation.goBack();
              }}
            >
              <ArrowIcon
                style={postsScreenStyles.icon}
                name="arrowleft"
                size={24}
              />
            </TouchableOpacity>
          ),
        }}
        name="Comments"
        component={CommentsScreen}
      />
    </NestedStack.Navigator>
  );
}
