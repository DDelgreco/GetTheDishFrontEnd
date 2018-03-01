import React, { Component } from "react";
import { StackNavigator } from "react-navigation";
import { Image, ScrollView } from "react-native";
import SearchBar from "./Screens/SearchBar";
import CardList from "./Screens/CardList";

const RootNavigator = StackNavigator(
  {
    Home: { screen: HomeScreen },
    SingleItem: { screen: SingleItem },
    SingleType: { scren: CardList },
  },
  {
    initialRouteName: 'Home'
  }
);

export default class App extends Component {
  render() {
    return (
      <ScrollView>
        <SearchBar />
        <CardList />
      </ScrollView>
    );
  }
}
