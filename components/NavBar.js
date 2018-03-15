import React, { Component } from "react";
import { View, StyleSheet, AsyncStorage } from "react-native";
import { Footer, FooterTab, Button, Icon, Text } from "native-base";

export default class NavBar extends Component {
  constructor(props) {
    super(props);
  }

  async profile() {
    let token = await AsyncStorage.getItem("auth");

    let request = new Request(
      `https://still-harbor-63243.herokuapp.com/api/users/me`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
        }
      }
    );
    try {
      if (results.status !== 200) {
        this.props.navigation.navigate("LogIn");
      } else {
        this.props.navigation.navigate("Profile");
      }
    } catch (error) {
      alert("Error ", error);
    }
  }

  render() {
    return (
      <Footer>
        <FooterTab>
          <Button dark transparent onPress={this.props.Home}>
            <Icon name="ios-home" />
            <Text>Home</Text>
          </Button>
          <Button dark transparent onPress={this.props.Types}>
            <Icon name="md-restaurant" />
            <Text>Foods</Text>
          </Button>
          <Button dark transparent onPress={this.props.NewItem}>
            <Icon name="ios-add-circle" />
            <Text>New Dish</Text>
          </Button>
          <Button
            dark
            transparent
            onPress={() => {
              this.profile();
            }}
          >
            <Icon name="ios-contact" />
            <Text>Profile</Text>
          </Button>
        </FooterTab>
      </Footer>
    );
  }
}
