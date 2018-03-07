import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
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
      <Card medium style={styles.Card}>
        <CardItem>
          <Left>
            <Text style={styles.fontSize}>{this.props.name}</Text>
          </Left>
          <Right>
            <Button
              small
              transparent
              onPress={this.props.Navigate}
              style={styles.Button}
            >
              <Icon style={styles.Icon} name="ios-arrow-forward-outline" />
            </Button>
          </Right>
        </CardItem>
      </Card>
    );
  }
}

const styles = StyleSheet.create({
  Card: {
    padding: 20
  },
  Text: {
    fontSize: 20
  },
  Button: {
    alignSelf: "flex-end"
  },
  Icon: {
    fontSize: 40
  }
});
