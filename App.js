import React, { Component } from "react";
import { StackNavigator } from "react-navigation";
import { Image, ScrollView } from "react-native";
import HomeScreen from "./Screens/HomeScreen";
import SingleItem from "./Screens/SingleItem";

const RootNavigator = StackNavigator(
  {
    Home: { screen: HomeScreen },
    SingleItem: { screen: SingleItem },
    // Type: { screen: TypeScreen }
  },
  {
    initialRouteName: "Home"
  }
);

export default class App extends Component {
  render() {
    return (
    <RootNavigator />
  );
  }
}
