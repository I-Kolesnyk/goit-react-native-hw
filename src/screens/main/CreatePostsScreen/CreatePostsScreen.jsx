import { useEffect, useState } from "react";
import {
  TouchableWithoutFeedback,
  TouchableOpacity,
  View,
  Image,
  Text,
  TextInput,
  Keyboard,
  ActivityIndicator,
  Alert,
} from "react-native";
import { Camera, CameraType } from "expo-camera";
import * as MediaLibrary from "expo-media-library";
import * as Location from "expo-location";
import { Ionicons, AntDesign, Entypo, MaterialIcons } from "@expo/vector-icons";
import { collection, setDoc, doc } from "firebase/firestore";

import { styles } from "./CreatePostsScreen.styles";
import { useSelectUser } from "../../../../hooks";
import { db } from "../../../firebase/config";
import { uploadPhoto } from "../../../firebase/uploadPhoto";
import { pickAvatar } from "../../../firebase/pickAvatar";

export default function CreatePostsScreen({ navigation }) {
  const { id, email, username, avatar } = useSelectUser();

  const [type, setType] = useState(CameraType.back);
  const [hasPermission, setHasPermission] = useState(null);
  const [cameraRef, setCameraRef] = useState(null);
  const [photo, setPhoto] = useState("");
  const [title, setTitle] = useState("");
  const [place, setPlace] = useState("");
  const [camera, setCamera] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  function toggleCameraType() {
    setType((current) =>
      current === CameraType.back ? CameraType.front : CameraType.back
    );
  }

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      await MediaLibrary.requestPermissionsAsync();

      setHasPermission(status === "granted");

      let loc = await Location.requestForegroundPermissionsAsync();
      if (loc.status !== "granted") {
        return Alert.alert("Permission to access location was denied");
      }
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return Alert.alert("No access to camera");
  }

  const openGallery = async () => {
    await pickAvatar(setPhoto);
  };

  const takePhoto = async () => {
    if (cameraRef) {
      const { uri } = await cameraRef.takePictureAsync();
      await MediaLibrary.createAssetAsync(uri);
      setPhoto(uri);
      setCamera(false);
    }
  };

  const openCamera = () => {
    setPhoto(null);
    setCamera(true);
  };

  const uploadPost = async (location) => {
    console.log(location);
    const url = await uploadPhoto(photo, "images");
    console.log(url);

    try {
      console.log({
        photo: url,
        title,
        place,
        location,
        userId: id,
        email,
        username,
        avatar,
      });
      const postsRef = collection(db, "posts");
      const postId = Date.now().toString();
      console.log(postsRef);
      await setDoc(doc(postsRef, `${postId}`), {
        photo: url,
        title,
        place,
        location,
        userId: id,
        email,
        username,
        avatar,
      });      
    } catch (error) {
      return Alert.alert("Error adding documenthfchgvkh: ", error.message);
    }
  };

  const onSubmit = async () => {
    if (!title || !photo || !place) {
      return Alert.alert("Please, fill in all fields");
    }
    try {
      setIsLoading(true);

      let location = await Location.getCurrentPositionAsync({});
      const coords = {
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
      };

      await uploadPost(coords);     
      navigation.navigate("Posts");
      setTitle("");
      setPhoto("");
      setPlace("");
    } catch (error) {
      return Alert.alert(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const openAlert = () =>
    Alert.alert("Download from gallery or take a photo?", "", [
      {
        text: "Open gallery",
        onPress: () => openGallery(),
      },
      { text: "Open camera", onPress: () => openCamera() },
    ]);

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <View style={styles.cameraWrapper}>
          {camera && (
            <Camera
              style={styles.camera}
              ref={(ref) => {
                setCameraRef(ref);
              }}
              type={type}
            >
              <TouchableOpacity
                style={styles.toggleCamera}
                onPress={toggleCameraType}
              >
                <AntDesign name="sync" size={18} color="#BDBDBD" />
              </TouchableOpacity>
            </Camera>
          )}
          {photo && <Image source={{ uri: photo }} style={styles.camera} />}
          {!camera ? (
            <TouchableOpacity style={styles.button(photo)} onPress={openAlert}>
              {photo ? (
                <Entypo name="edit" size={24} color="#BDBDBD" />
              ) : (
                <MaterialIcons
                  name="photo-camera"
                  size={24}
                  color={photo ? "#FFF" : "#BDBDBD"}
                />
              )}
            </TouchableOpacity>
          ) : (
            <TouchableOpacity onPress={takePhoto} style={styles.button(photo)}>
              <MaterialIcons
                name="photo-camera"
                size={24}
                color={photo ? "#FFF" : "#BDBDBD"}
              />
            </TouchableOpacity>
          )}
        </View>

        <TextInput
          style={styles.input}
          placeholder="Title..."
          placeholderTextColor="#BDBDBD"
          value={title}
          onChangeText={(text) => setTitle(text)}
        />

        <View style={{ position: "relative" }}>
          <Ionicons
            name="location-outline"
            size={24}
            color="#BDBDBD"
            style={styles.locationIcon}
          />
          <TextInput
            style={{ ...styles.input, paddingLeft: 28 }}
            placeholder="Location..."
            placeholderTextColor="#BDBDBD"
            value={place}
            onChangeText={(text) => setPlace(text)}
          />
        </View>
        {isLoading ? (
          <ActivityIndicator
            size="large"
            color="#FF6C00"
            style={{ marginTop: 32 }}
          />
        ) : (
          <TouchableOpacity
            style={styles.createButton(title && photo && place)}
            onPress={onSubmit}
          >
            <Text style={styles.createText(title && photo && place)}>
              Send to the world
            </Text>
          </TouchableOpacity>
        )}
      </View>
    </TouchableWithoutFeedback>
  );
}
