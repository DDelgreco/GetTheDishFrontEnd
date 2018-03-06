import React, { Component } from "react";
import { Image, View } from "react-native";
import {
  Content,
  Card,
  CardItem,
  Thumbnail,
  Text,
  Button,
  Icon,
  Left,
  Body,
  Right
} from "native-base";
import RatingButton from "../components/RatingButton";

export default class NewHotCard extends Component {
  constructor(props) {
    super(props);
    this.food = this.props.food;
    console.log(this.food);
  }
  render() {
    return (
      <Card style={{ flex: 0 }}>
        <CardItem>
          <Left>
            <Body>
              <Thumbnail
                square
                style={{ height: 60, width: 60 }}
                source={require("../pictures/food.png")}
              />
            </Body>
          </Left>
          <Right>
            <Body>
              <Text style={{ textAlign: "center", fontSize: 20 }}>
                {this.food.Name}
              </Text>
              <Text style={{ fontSize: 15, textAlign: "center" }} note>
                {this.food.RestaurantName}
              </Text>
            </Body>
          </Right>
        </CardItem>
        <CardItem>
          <Left>
            <RatingButton
              id={this.food.id}
              buttonStyle={{ backgroundColor: "#0099ff", height: 30 }}
              textStyle={{ fontSize: 20 }}
              iconName={"thumbs-up"}
            />
          </Left>
          <Right>
            <Button
              onPress={this.props.ToSingleItem}
              style={{ backgroundColor: "#0099ff", height: 30 }}
            >
              <Icon />
              <Text style={{ fontSize: 20 }}>More</Text>
            </Button>
          </Right>
        </CardItem>
      </Card>
    );
  }
}
