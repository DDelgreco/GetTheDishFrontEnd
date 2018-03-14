import React, { Component } from "react";
import { View, ScrollView, Text, Image, StyleSheet } from "react-native";
import { Body, Card, CardItem, Left, Right, Button, Icon } from "native-base";
//import MapView from "react-native-maps";
import Map from "../components/Map";
import RatingButton from "../components/RatingButton";
import openMap from "react-native-open-maps";

export default class SingleItemCard extends Component {
  constructor(props) {
    super(props);
    this.food = this.props.food;
  }

  toMaps(lat, long) {
    openMap({
      latitude: lat,
      longitude: long
    });
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
              <Image source={{ uri: this.food.Image }} style={styles.Image} />
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
            <Left>
              <Button
                info
                style={styles.RatingButton}
                onPress={this.props.Call}
              >
                <Icon name="md-call" />
                <Text style={styles.RatingText}>Call</Text>
              </Button>
            </Left>
            <Right>
              <RatingButton
                id={this.food.id}
                buttonStyle={styles.RatingButton}
                iconName={"md-thumbs-up"}
                textStyle={styles.RatingText}
                iconStyle={styles.RatingIcon}
              />
            </Right>
          </CardItem>
          <CardItem />
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
        <Button
          info
          style={styles.MapButton}
          onPress={() => {
            this.toMaps(this.food.RestLat, this.food.RestLong);
          }}
        >
          <Text style={styles.RatingText}>Open In Maps</Text>
        </Button>
      </Card>
    );
  }
}

const styles = StyleSheet.create({
  Name: { textAlign: "center", fontSize: 30, alignSelf: "center" },
  RestaurantName: { textAlign: "center", fontSize: 20, alignSelf: 'center' },
  Image: { height: 300, width: "100%", alignSelf: "center" },
  Address: { fontSize: 15 },
  Price: { fontSize: 30 },
  RatingButton: { alignSelf: "center" },
  RatingText: { fontSize: 20, color: "white", padding: 10 },
  RatingIcon: { fontSize: 30 },
  MapButton: { alignSelf: "center", padding: 10, margin: 10 }
});
