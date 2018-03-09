import React, { Component } from "react";
import { Image, View, StyleSheet } from "react-native";
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
              <Thumbnail square
                style={styles.Thumbnail}
                source={require("../pictures/food.png")}
              />
            </Body>
          </Left>
          <Right>
            <Body>
              <Text style={styles.Name}>
                {this.food.Name}
              </Text>
              <Text style={styles.RestaurantName} note>
                {this.food.RestaurantName}
              </Text>
            </Body>
          </Right>
        </CardItem>
        <CardItem>
          <Body>
            <Text style={styles.Location}>
              {this.food.StreetAddress} {this.food.City}, {this.food.State}{" "}
              {this.food.PostalCode}
            </Text>
            <Text style={styles.Phone} note>
              {this.food.Phone}
            </Text>
          </Body>
        </CardItem>
        <CardItem>
          <Left>
            <RatingButton
              id={this.food.id}
              buttonStyle={styles.RatingButton}
              textStyle={styles.RatingText}
              iconName={"thumbs-up"}
            />
          </Left>
          <Right>
            <Button
              onPress={this.props.Navigate}
              small info
              style={styles.MoreButton}
            >
              <Icon />
              <Text style={styles.MoreButtonText}>More</Text>
            </Button>
          </Right>
        </CardItem>
      </Card>
    );
  }
}

const styles = StyleSheet.create({
  ThumbNail: { height: 100, width: 100 },
  Name: { textAlign: "center", fontSize: 20 },
  RestaurantName: { fontSize: 13, textAlign: "center" },
  Location: { fontSize: 15 },
  Phone: { fontSize: 15 },
  RatingButton: { height: 30 },
  RatingText: { fontSize: 14 },
  MoreButtonText: { textAlign: "center" }

});
