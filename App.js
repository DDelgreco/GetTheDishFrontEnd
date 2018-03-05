import React, { Component } from "react";
import { StackNavigator } from "react-navigation";
import { Image, ScrollView } from "react-native";
import HomeScreen from "./Screens/HomeScreen";
import SingleItem from "./Screens/SingleItem";
import SingleType from "./Screens/SingleTypeScreen"
import FoodTypes from "./Screens/FoodTypesScreen"

const RootNavigator = StackNavigator(
  {
    Home: { screen: HomeScreen },
    SingleItem: { screen: SingleItem },
    SingleType: { screen: SingleType},
    FoodTypes: { screen: FoodTypes}
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
