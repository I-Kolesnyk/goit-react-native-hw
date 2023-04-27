import { useLayoutEffect } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  Platform,
  KeyboardAvoidingView,
  TextInput,
} from "react-native";

import MapIcon from "react-native-vector-icons/Feather";
import DeleteIcon from "react-native-vector-icons/AntDesign";
import ArrowIcon from "react-native-vector-icons/AntDesign";

import Layout from "../Layout";

import { createPostStyles } from "../../styles";

export default function CreatePostsScreen({ navigation }) {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => {
            navigation.goBack();
          }}
        >
          <ArrowIcon
            style={{ color: "#212121", paddingLeft: 16 }}
            name="arrowleft"
            size={24}
          />
        </TouchableOpacity>
      ),
    });
  }, [navigation]);

  return (
    <Layout>
      <View style={createPostStyles.container}>
        <View style={{ marginHorizontal: 16, marginTop: 32 }}>
          <KeyboardAvoidingView
            behavior={Platform.OS == "ios" ? "padding" : "height"}
            keyboardVerticalOffset={Platform.OS == "ios" ? -190 : -70}
          >
            <View style={createPostStyles.form}>
              <TextInput
                placeholder="Name..."
                style={createPostStyles.input}
                name="title"
              />
              <TextInput
                placeholder="Location..."
                style={{ ...createPostStyles.input, paddingLeft: 30 }}
                name="locationName"
              />
              <MapIcon
                style={createPostStyles.mapIcon}
                name="map-pin"
                size={25}
                color="#BDBDBD"
              />
            </View>
            <TouchableOpacity style={createPostStyles.btn}>
              <Text style={createPostStyles.btnText}>Give to the world</Text>
            </TouchableOpacity>
          </KeyboardAvoidingView>
        </View>
        <TouchableOpacity activeOpacity={0.6} style={createPostStyles.iconBox}>
          <DeleteIcon name="delete" size={24} color="#BDBDBD" />
        </TouchableOpacity>
      </View>
    </Layout>
  );
}
