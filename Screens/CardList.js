import React, { Component } from "react";
import { Container } from "native-base";
import { View } from "react-native";
import ItemCard from "./ItemCard";

export default class CardList extends Component {
  constructor(props) {
    super(props);
    this.state = { foods: [] };
  }
  async componentDidMount() {
    let foods = await this.fetchFoods();
    this.setState({ foods });
  }

  async fetchFoods() {
    try {
      let results = await fetch({
        url: "https://still-harbor-63243.herokuapp.com/api/items/"
      });
      let foods = await results.json();
      return foods;
    } catch (error) {
      console.log(error);
      return [];
    }
  }
  render() {
    return (
      <View>
        {this.state.foods.map((food, index) => {
          return <ItemCard key={index} food={food} />;
        })}
      </View>
    );
  }
}
