import { useLayoutEffect, useState, useRef } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  Platform,
  KeyboardAvoidingView,
  TextInput,
  Image,
} from "react-native";

import MapIcon from "react-native-vector-icons/Feather";
import DeleteIcon from "react-native-vector-icons/AntDesign";
import ArrowIcon from "react-native-vector-icons/AntDesign";
import PhotoIcon from "react-native-vector-icons/MaterialIcons";

import Layout from "../Layout";
import Button from "../../components/Button";

import { createPostStyles } from "../../styles";
import { Camera } from "expo-camera";

export default function CreatePostsScreen({ navigation }) {
  const [photo, setPhoto] = useState("");
  const ref = useRef(null);

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

  const takePhoto = async () => {
    console.log(ref.current.takePictureAsync());
    const options = { quality: 1.0, base64: true, skipProcessing: true };
    try {
      const photo = await ref.current.takePictureAsync(options);
      console.log(photo.uri);
      setPhoto(photo.uri);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Layout>
      <View style={createPostStyles.container}>
        <View style={{ marginHorizontal: 16, marginTop: 32 }}>
          <KeyboardAvoidingView
            behavior={Platform.OS == "ios" ? "padding" : "height"}
            keyboardVerticalOffset={Platform.OS == "ios" ? -190 : -70}
          >
            <Camera style={createPostStyles.camera} ref={ref}>
              {photo ? (
                <View style={createPostStyles.postImage}>
                  <Image source={{ uri: photo }} />
                </View>
              ) : (
                <>
                  <View>
                    <Button
                      icon={"ios-camera-reverse-outline"}
                      // onPress={changeCameraType}
                    />
                    <Button
                    // icon={flashIconChange}
                    // color={flashIconColorChange}
                    // onPress={flashSwitch}
                    />
                  </View>
                  <TouchableOpacity
                    // disabled={!isCameraReady || isTakingPicture}
                    // style={styles.photoIconBox}
                    onPress={takePhoto}
                  >
                    <PhotoIcon
                      style={createPostStyles.photoIcon}
                      name="photo-camera"
                      size={25}
                      color="#fffffd"
                    />
                  </TouchableOpacity>
                </>
              )}
            </Camera>
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
            <TouchableOpacity
              activeOpacity={0.6}
              style={createPostStyles.iconBox}
            >
              <DeleteIcon name="delete" size={24} color="#BDBDBD" />
            </TouchableOpacity>
          </KeyboardAvoidingView>
        </View>
      </View>
    </Layout>
  );
}
