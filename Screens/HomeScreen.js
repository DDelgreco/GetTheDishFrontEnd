import React, { Component } from "react";
import { Button, Text, Icon, Header } from "native-base";
import { ScrollView, View, StyleSheet } from "react-native";
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
  toSingleItem(food) {
    this.props.navigation.navigate("NewHotSingles");
  }

  render() {
    // const { navigate } = this.props.navigation;
    return (
      <View style={{ flex: 1 }}>
        <ScrollView>
          <Header style={styles.Header}>
            <Icon name="ios-flame" style={styles.Icon} />
            <Text style={styles.Text}> Hot Items</Text>
          </Header>
          <HotItems
            ToSingleItem={() => {
              this.toSingleItem();
            }}
          />
          <Header style={styles.Header}>
            <Icon name="ios-timer" style={styles.Icon} />
            <Text style={styles.Text}> Latest Items</Text>
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

const styles = StyleSheet.create({
  Header: {
    width: "100%",
    backgroundColor: "dimgray"
  },
  Icon: {
    fontSize: 30,
    color: "orange"
  },
  Text: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white"
  }
});
