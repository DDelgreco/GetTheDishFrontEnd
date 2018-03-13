import React, { Component } from "react";
import { ScrollView, View } from "react-native";
import { Button, Text } from "native-base";
import SingleItemCard from "../components/SingleItemCard";
import NavBar from "../components/NavBar";
import phonecall from "react-native-phone-call";

export default class SingleItem extends Component {
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
 call(number){
  phonecall(number);
 }

  constructor(props) {
    super(props);
    this.food = this.props.navigation.state.params.food;
  }

  render() {
    let number = this.food.CallPhone;
    return (
      <View style={{ flex: 1, backgroundColor: "dimgrey" }}>
        <ScrollView>
          <SingleItemCard Call={() => { this.call(number);}} food={this.food} />
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
