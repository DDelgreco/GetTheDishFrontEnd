import React, { Component } from "react";
import { StackNavigator } from "react-navigation";
import { Image, ScrollView } from "react-native";
import HomeScreen from "./Screens/HomeScreen";
import SingleItem from "./Screens/SingleItem";
import SingleType from "./Screens/SingleTypeScreen";
import FoodTypes from "./Screens/FoodTypesScreen";
import NewItem from "./Screens/NewItemScreen";
import NewHotSingles from "./Screens/NewHotSingleScreen";
import LogIn from "./Screens/LogInScreen"
import SignUp from "./Screens/SignUpScreen"
const RootNavigator = StackNavigator(
  {
    Home: { screen: HomeScreen },
    SingleItem: { screen: SingleItem },
    SingleType: { screen: SingleType},
    FoodTypes: { screen: FoodTypes},
    NewItem: { screen: NewItem},
    NewHotSingles: { screen: NewHotSingles},
    LogIn: {screen: LogIn},
    SignUp: {screen: SignUp}
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
