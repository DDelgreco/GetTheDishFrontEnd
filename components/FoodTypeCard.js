import React, { Component } from "react";
import { View } from "react-native";
import {
  Content,
  Card,
  CardItem,
  Text,
  Button,
  Body,
  Icon,
  Right,
  Left
} from "native-base";

export default class FoodTypeCard extends Component {
  constructor(props) {
    super(props);
    this.type = this.props.type;
  }
  render() {
    return (
      <Card medium style={{ padding: 20 }}>
        <CardItem>
          <Left>
            <Text style={{ fontSize: 20 }}>{this.props.name}</Text>
          </Left>
          <Right>
            <Button
              small
              transparent
              onPress={this.props.Navigate}
              style={{ alignSelf: "flex-end" }}
            >
              <Icon style={{ fontSize: 40 }} name="ios-arrow-forward-outline" />
            </Button>
          </Right>
        </CardItem>
      </Card>
    );
  }
}
