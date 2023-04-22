import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { db } from "../../firebase/config";
import { collection, query, where, onSnapshot } from "firebase/firestore";
import { authSignOutUser } from "../../redux/auth/operations";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
  Image,
  FlatList,
} from "react-native";
import Icon from "react-native-vector-icons/AntDesign";
import MapIcon from "react-native-vector-icons/Feather";
import CommentsIcon from "react-native-vector-icons/Fontisto";
import LogOutIcon from "react-native-vector-icons/MaterialIcons";

import Layout from "../Layout";

function ProfileScreen({ navigation }) {
  const [userPosts, setSetUserPosts] = useState([]);
  const { login, userId } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  
  const signOut = () => {
    dispatch(authSignOutUser());
  };

  useEffect(() => {
    const postsRef = collection(db, "posts");
    const userIdQuery = query(postsRef, where("userId", "==", userId));
    const unsubscribe = onSnapshot(userIdQuery, (querySnapshot) => {
      const posts = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setSetUserPosts(posts);
    });
    return () => unsubscribe();
  }, []);

  return (
   <Layout>
      <View style={styles.container}>
        <Image style={styles.imgBox} />
        <TouchableOpacity activeOpacity={0.5}>
          <Icon
            style={styles.icon}
            name="closecircleo"
            size={25}
            color="#E8E8E8"
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.logOut}
          activeOpacity={0.5}
          onPress={signOut}
        >
          <LogOutIcon name="logout" size={30} color="#BDBDBD" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>{login}</Text>
        <View>
          <FlatList
            data={userPosts.sort((a, b) => b.createdAt - a.createdAt)}
            style={{
              marginBottom: 190,
            }}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <View style={styles.postsBox}>
                <Image
                  source={{ uri: item.photoLink }}
                  style={styles.postImg}
                />
                <Text style={styles.textTitle}>{item.title}</Text>
                <View style={styles.infoBox}>
                  <View style={{ flexDirection: "row" }}>
                    <TouchableOpacity
                      style={{ ...styles.textInfoBox, marginRight: 24 }}
                    >
                      <CommentsIcon
                        style={{ transform: [{ scaleX: -1 }], marginRight: 6 }}
                        name="comment"
                        size={25}
                        color="#FF6C00"
                      />
                      <Text style={styles.IconText}>0</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      activeOpacity={0.8}
                      style={styles.textInfoBox}
                    >
                      <Icon
                        style={{ transform: [{ scaleX: -1 }], marginRight: 6 }}
                        name="like2"
                        size={25}
                        color="#FF6C00"
                      />
                      <Text style={styles.IconText}>0</Text>
                    </TouchableOpacity>
                  </View>
                  <TouchableOpacity
                    activeOpacity={0.8}
                    style={styles.textInfoBox}
                  >
                    <MapIcon
                      style={{ marginRight: 6 }}
                      name="map-pin"
                      size={25}
                      color="#BDBDBD"
                    />
                    <Text
                      style={{
                        ...styles.textInfo,
                        textDecorationLine: "underline",
                      }}
                    >
                      Ukraine
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            )}
          />
        </View>
      </View>
   </Layout>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ffffff",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    height: 579,
  },
  backgroundImage: {
    position: "relative",
    flex: 1,
    justifyContent: "flex-end",
    resizeMode: "content",
  },
  imgBox: {
    position: "absolute",
    left: "35%",
    top: -60,
    width: 120,
    height: 120,
    backgroundColor: "#F6F6F6",
    borderRadius: 16,
  },
  icon: {
    position: "absolute",
    right: 120,
    bottom: -50,
    zIndex: 100,
    borderRadius: 50,
  },
  headerTitle: {
    fontFamily: "Roboto-Medium",
    fontSize: 30,
    lineHeight: 35,
    textAlign: "center",
    letterSpacing: 0.01,
    color: "#212121",
    paddingTop: 92,
    paddingBottom: 32,
  },

  postsBox: {
    marginBottom: 32,
    marginHorizontal: 16,
  },
  postImg: {
    backgroundColor: "#212121",
    width: "100%",
    height: 240,
    borderRadius: 8,
    marginBottom: 8,
  },

  textTitle: {
    fontFamily: "Roboto-Medium",
    fontSize: 16,
    lineHeight: 19,
    color: "#212121",
  },

  infoBox: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 8,
  },
  textInfoBox: {
    flexDirection: "row",
    alignItems: "center",
  },
  textInfo: {
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    lineHeight: 19,
    color: "#212121",
  },
  IconText: {
    fontFamily: "Roboto-Medium",
    fontSize: 13,
    lineHeight: 15,
    color: "#212121",
  },
  logOut: {
    color: "#BDBDBD",
    paddingRight: 16,
    position: "absolute",
    right: 0,
    top: 24,
    zIndex: 100,
  },
});

export default ProfileScreen;
