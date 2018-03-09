import React, { Component } from "react";
import { ScrollView, View } from "react-native";
import { Button, Text } from "native-base";
import ItemCard from "../components/ItemCard";

import NavBar from "../components/NavBar";

export default class SingleType extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: navigation.state.params.type.name
  });
  navigate(food) {
    this.props.navigation.navigate("SingleFood", (food));
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
  toSingleItem(food) {
    this.props.navigation.navigate("NewHotSingles");
  }
  toLogIn(){
    this.props.navigation.navigate("LogIn");
  }
  constructor(props) {
    super(props);
    this.state = { foods: [] };
  }
  async componentDidMount() {
    let foods = await this.fetchFoods();
    this.setState({ foods });
  }

  async fetchFoods() {
    let id = this.props.navigation.state.params.type.id;
    try {
      let results = await fetch({
        url: `https://still-harbor-63243.herokuapp.com/api/items/${id}`
      });
      let foods = await results.json();
      return foods;
    } catch (error) {
      console.log(error);
      return [];
    }
  }
  navigate(food) {
    this.props.navigation.navigate("SingleItem", { food });
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
  render() {
    return (
      <View style={{ flex: 1 , backgroundColor: 'dimgrey'}}>
        <ScrollView>
          {this.state.foods.map((food, index) => {
            return (
              <ItemCard
                key={index}
                food={food}
                Navigate={() => {
                  this.navigate(food);
                }}
              />
            );
          })}
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
