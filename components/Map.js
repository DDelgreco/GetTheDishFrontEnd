import React, { Component } from "react";
import { Image, View, StyleSheet } from "react-native";
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
          latitudeDelta: 0.01,
          longitudeDelta: 0.01
        }}
        style={styles.Map}
      />
    );
  }
}

const styles = StyleSheet.create({
Map: { height: 300, width: '100%', alignSelf: 'center' }
});
