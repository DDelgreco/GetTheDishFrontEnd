import React, { Component } from "react";
import { Button, Text, Icon, Header } from "native-base";
import { ScrollView, View } from "react-native";
import NavBar from "../components/NavBar";
import HotItems from "../components/HotItems";
import LatestItems from "../components/LatestItems";

export default class HomeScreen extends Component {
  static navigationOptions = {
    title: "Get The Dish"
  };
  constructor(props) {
    super(props);
  }

  navigate() {
    this.props.navigation.navigate("FoodTypes");
  }
  toHome() {
    this.props.navigation.navigate("Home");
  }
  toTypes() {
    this.props.navigation.navigate("FoodTypes");
  }
  toNewItem() {
    this.props.navigation.navigate("NewItem");
  }

  render() {
    // const { navigate } = this.props.navigation;
    return (
      <View style={{ flex: 1 }}>
        <ScrollView>
          <Header
            style={{
              width: "100%",
              textAlign: "center",
              backgroundColor: "dimgray"
            }}
          >
            <Icon name="ios-flame" style={{ fontSize: 30, color: "white" }} />
            <Text style={{ fontSize: 20, fontWeight: 'bold', color: "white" }}>   Hot Items</Text>
          </Header>
          <HotItems />
          <Header
            style={{
              width: "100%",
              textAlign: "center",
              backgroundColor: "dimgray"
            }}
          >
            <Icon name="ios-timer" style={{ fontSize: 30, color: "white" }} />
            <Text style={{ fontSize: 20, fontWeight: 'bold', color: "white" }}>   Latest Items</Text>
          </Header>
          <LatestItems />
        </ScrollView>
        <NavBar
          Home={() => {
            this.toHome();
          }}
          Types={() => {
            this.toTypes();
          }}
          NewItem={() => {
            this.toNewItem();
          }}
        />
      </View>
    );
  }
}
