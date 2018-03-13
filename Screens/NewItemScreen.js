import React, { Component } from "react";
import { ScrollView, View, StyleSheet } from "react-native";
import { Form, Item, Input, Label, Button, Text } from "native-base";
import PostDishButton from "../components/PostDishButton";
import NavBar from "../components/NavBar";
import RestaurantSearchBar from "../components/RestaurantSearchBar";
import FoodTypeSearchBar from "../components/FoodTypeSearchBar";

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
  toLogIn() {
    this.props.navigation.navigate("LogIn");
  }

  constructor(props) {
    super(props);
    this.handleRestaurantChange = this.handleRestaurantChange.bind(this);
    this.handleTypeChange = this.handleTypeChange.bind(this);
    this.state = {
      name: "",
      price: "",
      restaurant_id: "",
      type_id: ""
    };
  }

  handleNameChange(name) {
    this.setState({ name });
  }

  handlePriceChange(price) {
    this.setState({ price });
  }

  handleRestaurantChange(restaurant_id) {
    this.setState({ restaurant_id });
  }

  handleTypeChange(type_id) {
    this.setState({ type_id });
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <ScrollView>
          <Form>
            <Item border floatingLabel>
              <Label>Name of Dish</Label>
              <Input
                value={this.state.name}
                onChangeText={text => this.handleNameChange(text)}
              />
            </Item>
            <Item floatingLabel>
              <Label>Price</Label>
              <Input
                keyboardType="numeric"
                value={this.state.price}
                onChangeText={text => this.handlePriceChange(text)}
              />
            </Item>
            <View style={{ zIndex: 3 }}>
              <RestaurantSearchBar
                onRestaurantSelect={this.handleRestaurantChange}
              />
            </View>
            <View style={{ zIndex: 2 }}>
              <FoodTypeSearchBar onTypeSelect={this.handleTypeChange} />
            </View>
            <View style={{ zIndex: 1 }}>
              <PostDishButton item={this.state} />
            </View>
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
          Profile={() => {
            this.toLogIn();
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  View: { flex: 1, backgroundColor: "dimgray" },
  Form: {
    backgroundColor: "white",
    width: "90%",
    alignSelf: "center",
    marginTop: 20
  }
});
