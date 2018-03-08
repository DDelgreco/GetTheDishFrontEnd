import React, { Component } from "react";
import { Image, View, StyleSheet } from "react-native";
import MapView, { Marker } from "react-native-maps";

export default class Map extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <MapView
        region={{
          latitude: this.props.latitude,
          longitude: this.props.longitude,
          latitudeDelta: 0.005,
          longitudeDelta: 0.005
        }}
        style={styles.Map}
      >
      <Marker 
      coordinate={{
        latitude: this.props.latitude,
        longitude: this.props.longitude
      }}/>
      </MapView>
    );
  }
}

const styles = StyleSheet.create({
  Map: { height: 300, width: "100%", alignSelf: "center" }
});
