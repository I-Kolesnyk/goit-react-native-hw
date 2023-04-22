import { View, StyleSheet } from "react-native";
import MapView, { Marker } from "react-native-maps";

const MapScreen = () => {
  return (
    <View style={styles.container}>
      <MapView
        style={{ flex: 1 }}
        initialRegion={{
          latitude: 50.44961659850182,
          longitude: 30.525125578548096,
          latitudeDelta: 0.00522,
          longitudeDelta: 0.00221,
        }}
      >
        <Marker
          coordinate={{
            latitude: 50.44961659850182,
            longitude: 30.525125578548096,
          }}
          title="my photo"
        />
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default MapScreen;