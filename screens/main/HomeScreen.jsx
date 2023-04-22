import React from "react";
import { useDispatch } from "react-redux";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Feather, Ionicons, Entypo, AntDesign } from "@expo/vector-icons";
import ArrowIcon from "react-native-vector-icons/AntDesign";
import LogOutIcon from "react-native-vector-icons/MaterialIcons";
import { authSignOutUser } from "../../redux/auth/operations";

import DefaultPostsScreen from "../nested/DefaultPostsScreen";
import CommentsScreen from "../nested/CommentsScreen";
import MapScreen from "../nested/MapScreen";

const NestedScreen = createNativeStackNavigator();

const HomeScreen = () => {
  const navigation = useNavigation();

  const dispatch = useDispatch();
  const signOut = () => {
    dispatch(authSignOutUser());
  };
  return (
    <NestedScreen.Navigator>
      <NestedScreen.Screen
        name={"Posts"}
        component={DefaultPostsScreen}
        options={{
          headerShown: true,
          headerTitleAlign: "center",
          headerTintColor: "#212121",
          headerTitleStyle: {
            fontSize: 17,
            lineHeight: 22,
          },
          headerRightContainerStyle: { marginRight: 16 },
          headerStyle: {
            borderBottomWidth: 1,
            borderBottomColor: "#E5E5E5",
          },
          tabBarIconStyle: { opacity: 0.8 },
          headerRight: () => (
            <TouchableOpacity onPress={signOut}>
              <Feather name="log-out" size={24} color="#BDBDBD" />
            </TouchableOpacity>
          ),
        }}
      />
      <NestedScreen.Screen
        options={{
          headerTitle: "Comments",
          headerLeft: () => (
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => {
                navigation.goBack();
              }}
            >
              <ArrowIcon name="arrowleft" size={24} />
            </TouchableOpacity>
          ),
        }}
        name={"Comments"}
        component={CommentsScreen}
      />
      <NestedScreen.Screen
        options={{
          headerTitle: "Location",
          headerLeft: () => (
            <TouchableOpacity
              activeOpacity={0.5}
              onPress={() => {
                navigation.goBack();
              }}
            >
              <ArrowIcon name="arrowleft" size={24} />
            </TouchableOpacity>
          ),
        }}
        name={"Map"}
        component={MapScreen}
      />
    </NestedScreen.Navigator>
  );
};

export default HomeScreen;
