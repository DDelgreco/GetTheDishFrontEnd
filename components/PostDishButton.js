import React, { Component } from "react";
import { Button, Icon, Text } from "native-base";
import { StyleSheet, Alert } from "react-native";

export default class PostDishButton extends Component {
  constructor(props) {
    super(props);
  }
  toHome() {
    this.props.navigation.navigate("Home");
  }
  async handleOnPress() {
    let result = await this.postItem();
    console.log("It is posted.");
    Alert.alert("Thanks!", "Your Dish Has Been Posted", [
      {
        text: "Sweet!",
        onPress: this.props.Home
      }
    ]);
  }
  async postItem() {
    let request = new Request(
      `https://still-harbor-63243.herokuapp.com/api/items/checkrest`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(this.props.item)
      }
    );

    try {
      let results = await fetch(request);
      return results[0];
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    return (
      <Button
        info
        large
        style={styles.Button}
        onPress={() => this.handleOnPress()}
      >
        <Text>Post Dish</Text>
      </Button>
    );
  }
}

const styles = StyleSheet.create({
  Button: {
    alignSelf: "center",
    margin: 30
  }
});
