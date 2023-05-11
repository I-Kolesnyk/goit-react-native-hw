import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Keyboard, TouchableOpacity } from "react-native";
import React, { useState, useEffect } from "react";
import { AntDesign, Feather, Ionicons, MaterialIcons } from "@expo/vector-icons";

import CreatePostsScreen from "../CreatePostsScreen";
import ProfileScreen from "../ProfileScreen";
import NestedPostsScreen from "../../nested/NestedPostsScreen";
import { useDispatch } from "react-redux";
import { logOut } from "../../../redux/auth/operations";

const Tab = createBottomTabNavigator();

export default function PostsScreen({ navigation }) {
  const [isShownKeyboard, setIsShownKeyboard] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    const showSubscription = Keyboard.addListener("keyboardDidShow", () => {
      setIsShownKeyboard(true);
    });
    const hideSubscription = Keyboard.addListener("keyboardDidHide", () => {
      setIsShownKeyboard(false);
    });
    return () => {
      showSubscription.remove();
      hideSubscription.remove();
    };
  }, []);

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          height: 83,
          paddingTop: 9,
          paddingRight: 50,
          paddingLeft: 50,
        },
        tabBarItemStyle: {
          width: 70,
          height: 40,
          borderRadius: 20,
        },
        tabBarActiveBackgroundColor: "#FF6C00",
      }}
      backBehavior="history"
    >
      <Tab.Screen
        name="Posts"
        component={NestedPostsScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <AntDesign
              name="appstore-o"
              size={24}
              color={focused ? "#FFF" : "rgba(33, 33, 33, 0.8)"}
            />
          ),
          headerRight: () => (
            <TouchableOpacity
              onPress={() => dispatch(logOut())}
              style={{ marginRight: 16 }}
            >
              <MaterialIcons name="logout" size={24} color="#BDBDBD" />
            </TouchableOpacity>
          ),
          headerTitleAlign: "center",
          headerTitleStyle: {
            fontSize: 17,
            lineHeight: 22,
            color: "#212121",
            fontFamily: "Roboto-medium",
          },
        }}
      />
      <Tab.Screen
        name="Create post"
        component={CreatePostsScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <AntDesign
              name="plus"
              size={24}
              color={focused ? "#FFF" : "rgba(33, 33, 33, 0.8)"}
            />
          ),
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={{ marginLeft: 20 }}
            >
              <Ionicons
                name="arrow-back"
                size={24}
                color="rgba(33, 33, 33, 0.8)"
              />
            </TouchableOpacity>
          ),
          headerTitleAlign: "center",
          headerTitleStyle: {
            fontSize: 17,
            lineHeight: 22,
            color: "#212121",
            fontFamily: "Roboto-medium",
          },

          tabBarStyle: isShownKeyboard
            ? { display: "none" }
            : {
                height: 83,
                paddingTop: 9,
                paddingRight: 50,
                paddingLeft: 50,
              },
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Feather
              name="user"
              size={24}
              color={focused ? "#FFF" : "rgba(33, 33, 33, 0.8)"}
            />
          ),
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
}
