import React, { Component } from "react";
import { Button, Text } from "native-base";
import { AsyncStorage, Alert } from "react-native";

export default class SignOutButton extends Component {
  constructor(props) {
    super(props);
  }

  toHome() {
    this.props.navigation.navigate("Home");
  }
  async handleLogout() {
    let token = await AsyncStorage.getItem("auth");
    try {
      await AsyncStorage.removeItem("auth");
      if (!token) {
        alert("Need to be logged in to log out!");
      } else {
        Alert.alert("Thanks!", "You Have Been Logged Out", [
          {
            text: "Sweet!",
            onPress: this.props.Home
          }
        ]);
      }
    } catch (error) {
      console.log("AsyncStorage error: " + error.message);
    }
  }

  render() {
    return (
      <Button
        style={{ alignSelf: "center", margin: 10 }}
        info
        onPress={() => {
          this.handleLogout();
        }}
      >
        <Text>Log Out</Text>
      </Button>
    );
  }
}
