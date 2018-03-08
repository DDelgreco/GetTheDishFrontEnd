import React, { Component } from "react";
import { View, ScrollView, Text, Image, StyleSheet } from "react-native";
import { Body, Card, CardItem, Left, Right, Button } from "native-base";
//import MapView from "react-native-maps";
import Map from "../components/Map";
import RatingButton from "../components/RatingButton";

export default class SingleItemCard extends Component {
  constructor(props) {
    super(props);
    this.food = this.props.food;
  }
  render() {
    return (
      <Card>
        <View>
          <CardItem>
            <Body>
              <Text style={styles.Name}>{this.food.Name}</Text>
              <Text note style={styles.RestaurantName}>
                {this.food.RestaurantName}
              </Text>
            </Body>
          </CardItem>
        </View>
        <View>
          <CardItem>
            <Body>
              <Image
                source={require("../pictures/food.png")}
                style={styles.Image}
              />
            </Body>
          </CardItem>
        </View>
        <View>
          <CardItem>
            <Left>
              <Body>
                <Text style={styles.Address}>{this.food.StreetAddress}</Text>
                <Text style={styles.Address}>
                  {this.food.City}, {this.food.State} {this.food.PostalCode}
                </Text>
                <Text note>{this.food.Phone}</Text>
              </Body>
            </Left>
            <Right>
              <Text style={styles.Price}>${this.food.Price}</Text>
            </Right>
          </CardItem>
        </View>
        <View>
          <CardItem>
            <Body>
              <RatingButton
                id={this.food.id}
                buttonStyle={styles.RatingButton}
                iconName={"md-thumbs-up"}
                textStyle={styles.RatingText}
                iconStyle={styles.RatingIcon}
              />
            </Body>
          </CardItem>
        </View>
        <View>
          <CardItem>
            <Body>
              <Map
                latitude={this.food.RestLat}
                longitude={this.food.RestLong}
              />
            </Body>
          </CardItem>
        </View>
      </Card>
    );
  }
}

const styles = StyleSheet.create({
  Name: { textAlign: "center", fontSize: 25 },
  RestaurantName: { textAlign: "center" },
  Image: { height: 200, width: 200, alignSelf: "center" },
  Address: { fontSize: 15 },
  Price: { fontSize: 30 },
  RatingButton: { alignSelf: "center" },
  RatingText: { fontSize: 20, marginTop: 5, color: "white" },
  RatingIcon: { fontSize: 30 }
});
