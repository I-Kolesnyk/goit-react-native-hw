import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useState } from "react";

import { TouchableOpacity } from "react-native";
import { Feather, Ionicons, Entypo, AntDesign } from "@expo/vector-icons";

import LoginScreen from "./screens/auth/LoginScreen";
import RegistrationScreen from "./screens/auth/RegistrationScreen";

import HomeScreen from "./screens/main/HomeScreen";
import CreatePostsScreen from "./screens/main/CreatePostsScreen";
import ProfileScreen from "./screens/main/ProfileScreen";

export const useRouter = (stateChange) => {
  const { Navigator, Screen } = createNativeStackNavigator();
  const MainTab = createBottomTabNavigator();

  if (!stateChange) {
    return (
      <Navigator>
        <Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <Screen
          name="Registration"
          component={RegistrationScreen}
          options={{ headerShown: false }}
        />
      </Navigator>
    );
  }
  return (
    <MainTab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        headerShown: false,
        tabBarActiveTintColor: "#FF6C00",
      }}
    >
      <MainTab.Screen
        options={{
          tabBarIcon: ({ focused, color, size }) => {
            return (
              <Ionicons name="ios-grid-outline" size={size} color={color} />
            );
          },
        }}
        name="Home"
        component={HomeScreen}
      />
      <MainTab.Screen
        options={{
          tabBarIcon: ({ focused, color, size }) => {
            return (
              <Ionicons
                name="ios-add-circle-outline"
                size={size}
                color={color}
              />
            );
          },
        }}
        name="CreatePosts"
        component={CreatePostsScreen}
      />
      <MainTab.Screen
        options={{
          tabBarIcon: ({ focused, color, size }) => {
            return (
              <Ionicons name="ios-person-outline" size={size} color={color} />
            );
          },
        }}
        name="Profile"
        component={ProfileScreen}
      />
    </MainTab.Navigator>
  );
};
