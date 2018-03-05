import React, { Component } from "react";
import { Image, View } from "react-native";
import MapView from "react-native-maps";

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
          latitudeDelta: 0.1,
          longitudeDelta: 0.1
        }}
        style={{ height: "100%", width: "100%" }}
        cacheEnabled={true}
      />
    );
  }
}
