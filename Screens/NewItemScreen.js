import React, { Component } from "react";
import { ScrollView, View } from "react-native";
import { Form, Item, Input, Label, Button, Text } from "native-base";
import DropDown from "../components/DropDown";
import PostDishButton from "../components/PostDishButton";
import NavBar from "../components/NavBar";

export default class NewItem extends Component {
  static navigationOptions = {
    title: "New Dish"
  };
  navigate() {
    this.props.navigation.navigate("FoodTypes");
  }
  toHome() {
    this.props.navigation.navigate("Home");
  }
  toTypes() {
    this.props.navigation.navigate("FoodTypes");
  }
  toNewItem() {
    this.props.navigation.navigate("NewItem");
  }
  render() {
    return (
      <View style={{ flex: 1 }}>
        <ScrollView>
          <Form>
            <Item floatingLabel>
              <Label>Name of Dish</Label>
              <Input />
            </Item>
            <Item floatingLabel>
              <Label>Restaurant</Label>
              <Input />
            </Item>
            <Item floatingLabel>
              <Label>Price</Label>
              <Input />
            </Item>
            {/* <DropDown /> */}
            <PostDishButton />
          </Form>
        </ScrollView>
        <NavBar
          Home={() => {
            this.toHome();
          }}
          Types={() => {
            this.toTypes();
          }}
          NewItem={() => {
            this.toNewItem();
          }}
        />
      </View>
    );
  }
}
