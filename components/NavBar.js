import React, { Component } from "react";
import { View, StyleSheet, AsyncStorage, Alert } from "react-native";
import { Footer, FooterTab, Button, Icon, Text } from "native-base";

export default class NavBar extends Component {
  constructor(props) {
    super(props);
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
            onPress={this.props.Profile}
          >
            <Icon name="ios-contact" />
            <Text>Profile</Text>
          </Button>
        </FooterTab>
      </Footer>
    );
  }
}
