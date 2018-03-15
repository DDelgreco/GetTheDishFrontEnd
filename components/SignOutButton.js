import React, { Component } from "react";
import { Button, Text } from "native-base";
import {AsyncStorage} from "react-native"

export default class SignOutButton extends Component {
  constructor(props) {
    super(props);
  }

  async handleLogout() {
    let token = await AsyncStorage.getItem("auth");
    try {
      await AsyncStorage.removeItem("auth");
      if (!token) {
        alert("Need to be logged in to log out!");
      } else {
        alert("You have been logged out!");
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