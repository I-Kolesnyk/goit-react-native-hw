import React, { useState } from "react";
import { View, StyleSheet, FlatList, Image, Button } from "react-native";

const DefaultPostsScreen = () => {
  const [posts, setPosts] = useState([]);

  return (
    <View style={styles.container}>
       <Button title="sign out" />
      {/* <FlatList
        style={{ marginTop: 50 }}
        data={posts}
        keyExtractor={(item, indx) => indx.toString()}
        renderItem={({ item }) => (
          <View style={{ marginBottom: 20 }}>
            <Image
              source={{ uri: item.image }}
              style={{ marginHorizontal: 10, height: 200 }}
            />
          </View>
        )}
      />
      <Button title="Go to map" onPress={() => navigation.navigate("Map")} />
      <Button
        title="Go to comments"
        onPress={() => navigation.navigate("Comments")}
      /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
});

export default DefaultPostsScreen;
