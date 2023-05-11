import { createNativeStackNavigator } from "@react-navigation/native-stack";

import CommentsScreen from "../nested/CommentsScreen";
import MapScreen from "../nested/MapScreen";
import PostsScreen from "./PostsScreen";

const NestedScreen = createNativeStackNavigator();

export default function Home() {
  return (
    <NestedScreen.Navigator>
      <NestedScreen.Screen
        name="NestedPosts"
        component={PostsScreen}
        options={{
          headerShown: false,
        }}
      />
      <NestedScreen.Screen
        name="Comments"
        component={CommentsScreen}
        options={{
          headerTitleAlign: "center",
          headerTitleStyle: {
            fontSize: 17,
            lineHeight: 22,
            color: "#212121",
            fontFamily: "Roboto-medium",
          },
        }}
      />
      <NestedScreen.Screen
        name="Map"
        component={MapScreen}
        options={{
          headerTitleAlign: "center",
          headerTitleStyle: {
            fontSize: 17,
            lineHeight: 22,
            color: "#212121",
            fontFamily: "Roboto-medium",
          },
        }}
      />
    </NestedScreen.Navigator>
  );
}
