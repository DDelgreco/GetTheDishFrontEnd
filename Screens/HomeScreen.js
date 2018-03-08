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

  toSingleItem(food) {
    this.props.navigation.navigate("NewHotSingles");
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
  
  toLogIn() {
    this.props.navigation.navigate("LogIn");
  }

  render() {
    // const { navigate } = this.props.navigation;
    return (
      <View style={styles.View}>
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
          Profile={() => {
            this.toLogIn();
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  View: { flex: 1, backgroundColor: "dimgray" },
  Header: {
    width: "100%",
    backgroundColor: "dimgray"
  },
  Icon: {
    fontSize: 40,
    color: "orange"
  },
  Text: {
    fontSize: 30,
    fontWeight: "bold",
    color: "white"
  }
});
