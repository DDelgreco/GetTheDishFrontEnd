import React, { Component } from "react";
import { Button, Text } from "native-base";
import { ScrollView } from "react-native";

export default class HomeScreen extends Component {
  static navigationOptions = {
    title: "Home"
  };
  constructor(props) {
    super(props);
  }

  navigate(type) {
    this.props.navigation.navigate("FoodTypes", { type });
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <ScrollView>
        <Button
          large
          style={{ alignSelf: "center", margin: 30 }}
          onPress={() => navigate("FoodTypes")}
        >
          <Text>Show Food Types</Text>
        </Button>
      </ScrollView>
    );
  }
}
