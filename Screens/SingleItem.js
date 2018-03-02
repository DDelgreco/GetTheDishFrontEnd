import React, { Component } from "react";
import { ScrollView, Text, Image } from "react-native";
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

export default class SingleItem extends Component {
  constructor(props) {
    super(props);
    this.food = this.props.navigation.state.params.food;
  }
  render() {
    return (
      <ScrollView>
        <Content>
          <Card >
            <CardItem>
              <Body>
                <Text style={{ textAlign: 'center',fontSize: 25,}}>{this.food.Name}</Text>
                <Text style={{ textAlign: 'center'}}note>{this.food.RestaurantName}</Text>
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
              <Body >
                <Text style={{fontSize: 15}}>{this.food.StreetAddress}</Text>
                <Text style={{fontSize: 15}}>
                  {this.food.City}, {this.food.State} {this.food.PostalCode}
                </Text>
                <Text note>{this.food.Phone}</Text>
              </Body>
              </Left>
              <Right>
                  <Text style={{fontSize: 30}}>${this.food.Price}</Text>
                </Right>
            </CardItem>
            <CardItem>
              <Body>
                <Button 
                  style={{ alignSelf: "center" }}
                  textStyle={{ color: "#87838B" }}
                >
                  <Icon name="md-thumbs-up" style={{ fontSize: 30 }} />
                  <Text
                    style={{
                      fontSize: 20,
                      color: "white",
                      padding: 10,
                      width: 50
                    }}
                  >
                    {this.food.Rating}
                  </Text>
                </Button>
              </Body>
            </CardItem>
          </Card>
        </Content>
      </ScrollView>
    );
  }
}
