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
                style={{ height:100, width: 100 }}
                source={require("../pictures/food.png")}
              />
            </Body>
          </Left>
          <Right>
            <Body>
              <Text style={{ textAlign: 'center', fontSize: 20 }}>{this.food.name}</Text>
              <Text style={{ fontSize: 20 }} note>
                Restaurant
              </Text>
            </Body>
          </Right>
        </CardItem>
        <CardItem>
          <Body>
            <Text style={{fontSize: 10}}>1000 1st St. Birmingham, AL 35242</Text>
            <Text style={{fontSize: 10}}note> (555)555-5555</Text>
          </Body>
        </CardItem>
        <CardItem>
          <Left>
            <Button small style={{ backgroundColor: "#0099ff" }}>
              <Icon name="thumbs-up" />
              <Text>24 </Text>
            </Button>
          </Left>
          <Right>
            <Button small style={{ backgroundColor: "#0099ff" }}>
              <Icon />
              <Text style={{ textAlign: "center" }}>More</Text>
            </Button>
          </Right>
        </CardItem>
      </Card>
    );
  }
}
