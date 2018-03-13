import React, { Component } from "react";
import { ScrollView, View } from "react-native";
import { Button, Text } from "native-base";
import NewHotCard from "../components/NewHotCard";

import NavBar from "../components/NavBar";

export default class HotItems extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View>
        <ScrollView>
          <NewHotCard
            Navigate={() => {
              this.props.Navigate;
            }}
            food={this.props.food}
          />
          <Button light onPress={this.props.Navigate} />
        </ScrollView>
      </View>
    );
  }
}
