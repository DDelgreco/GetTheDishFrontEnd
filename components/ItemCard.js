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

export default class ItemCard extends Component {
  constructor(props) {
    super(props);
    this.food = this.props.food;
  }
  render() {
    return (
      <Card style={{ flex: 0 }}>
        <CardItem>
          <Left>
            <Body>
              <Thumbnail
                style={{ height: 100, width: 100 }}
                source={require("../pictures/food.png")}
              />
            </Body>
          </Left>
          <Right>
            <Body>
              <Text style={{ textAlign: "center", fontSize: 20 }}>
                {this.food.Name}
              </Text>
              <Text style={{ fontSize: 13, textAlign: "center" }} note>
                {this.food.RestaurantName}
              </Text>
            </Body>
          </Right>
        </CardItem>
        <CardItem>
          <Body>
            <Text style={{ fontSize: 15 }}>
              {this.food.StreetAddress} {this.food.City}, {this.food.State}{" "}
              {this.food.PostalCode}
            </Text>
            <Text style={{ fontSize: 15 }} note>
              {this.food.Phone}
            </Text>
          </Body>
        </CardItem>
        <CardItem>
          <Left>
            <RatingButton
              id={this.food.id}
              buttonStyle={{ backgroundColor: "#0099ff", height: 30 }}
              textStyle={{ fontSize: 14 }}
              iconName={"thumbs-up"}
            />
          </Left>
          <Right>
            <Button
              onPress={this.props.Navigate}
              small
              style={{ backgroundColor: "#0099ff" }}
            >
              <Icon />
              <Text style={{ textAlign: "center" }}>More</Text>
            </Button>
          </Right>
        </CardItem>
      </Card>
    );
  }
}
