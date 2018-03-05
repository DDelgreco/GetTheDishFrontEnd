import React, { Component } from "react";
import { View, ScrollView, Text, Image } from "react-native";
import {
  Header,
  Content,
  ListItem,
  CheckBox,
  Body,
  Card,
  CardItem,
  Left,
  Right,
  Button,
  Icon
} from "native-base";
import MapView from "react-native-maps";
import Map from "../components/Map";
import RatingButton from "../components/RatingButton";

export default class SingleItem extends Component {
  constructor(props) {
    super(props);
    this.food = this.props.navigation.state.params.food;
  }
  render() {
    return (
      <ScrollView>
        <Card>
          <CardItem>
            <Body>
              <Text style={{ textAlign: "center", fontSize: 25 }}>
                {this.food.Name}
              </Text>
              <Text style={{ textAlign: "center" }} note>
                {this.food.RestaurantName}
              </Text>
            </Body>
          </CardItem>
          <CardItem>
            <Body>
              <Image
                source={require("../pictures/food.png")}
                style={{ height: 200, width: 200, alignSelf: "center" }}
              />
            </Body>
          </CardItem>
          <CardItem>
            <Left>
              <Body>
                <Text style={{ fontSize: 15 }}>{this.food.StreetAddress}</Text>
                <Text style={{ fontSize: 15 }}>
                  {this.food.City}, {this.food.State} {this.food.PostalCode}
                </Text>
                <Text note>{this.food.Phone}</Text>
              </Body>
            </Left>
            <Right>
              <Text style={{ fontSize: 30 }}>${this.food.Price}</Text>
            </Right>
          </CardItem>
          <CardItem>
            <Body>
            <RatingButton
              id={this.food.id}
              buttonStyle={{ alignSelf: "center" }}
              iconName={"md-thumbs-up"}
              textStyle={{ fontSize: 20, marginTop: 5, color: "white" }}
              iconStyle={{ fontSize: 30 }}
            />
            </Body>
          </CardItem>
          <CardItem>
            <Map latitude={this.food.RestLat} longitude={this.food.RestLong} />
          </CardItem>
        </Card>
      </ScrollView>
    );
  }
}
