import React, { Component } from "react";
import { ScrollView, View } from "react-native";
import { Text } from "native-base";
import FoodTypeCard from "../components/FoodTypeCard";

import NavBar from "../components/NavBar";

export default class FoodType extends Component {
  static navigationOptions = {
    title: "Food Types "
  };
  constructor(props) {
    super(props);
    this.state = { types: [], title: "" };
  }
  async componentDidMount() {
    let types = await this.fetchTypes();
    this.setState({ types });
  }

  async fetchTypes() {
    try {
      let results = await fetch({
        url: `https://still-harbor-63243.herokuapp.com/api/type/`
      });
      let types = await results.json();
      return types;
    } catch (error) {
      console.log(error);
      return [];
    }
  }
  navigate(type) {
    this.props.navigation.navigate("SingleType", { type });
  }
  toHome() {
    this.props.navigation.navigate("Home");
  }
  render() {
    return (
      <View style={{ flex: 1 }}>
        <ScrollView>
          <Text style={{ textAlign: "center" }} />
          {this.state.types.map((type, index) => {
            return (
              <FoodTypeCard
                key={index}
                type={type}
                Navigate={() => {
                  this.navigate(type);
                }}
              />
            );
          })}
        </ScrollView>
        <NavBar
          Home={() => {
            this.toHome();
          }}
        />
      </View>
    );
  }
}
