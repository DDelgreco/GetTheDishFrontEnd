import React, { Component } from "react";
import { View } from "react-native";
import { Footer, FooterTab, Button, Icon, Text } from "native-base";

export default class NavBar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Footer>
        <FooterTab>
          <Button onPress={this.props.Home}>
            <Icon name="ios-home-outline" />
            <Text>Home</Text>
          </Button>
          <Button onPress={this.props.Types}>
            <Icon name="ios-albums-outline" />
            <Text>Foods</Text>
          </Button>
          <Button onPress={this.props.NewItem}>
            <Icon name="ios-add" />
            <Text>New Dish</Text>
          </Button>
          <Button>
            <Icon name="person" />
            <Text>Profile</Text>
          </Button>
        </FooterTab>
      </Footer>
    );
  }
}
