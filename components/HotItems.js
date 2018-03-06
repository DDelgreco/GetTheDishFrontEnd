import React, { Component } from "react";
import { ScrollView, View } from "react-native";
import { Button, Text } from "native-base";
import NewHotCard from "../components/NewHotCard";

import NavBar from "../components/NavBar";

export default class HotItems extends Component {
  constructor(props) {
    super(props);
    this.state = { hottest: [] };
  }
  async componentDidMount() {
    let hottest = await this.fetchHottest();
    this.setState({ hottest });
  }

  async fetchHottest() {
    try {
      let results = await fetch({
        url: `https://still-harbor-63243.herokuapp.com/api/homescreen/hottest`
      });
      let hottest = await results.json();
      return hottest;
    } catch (error) {
      console.log(error);
      return [];
    }
  }

  render() {
    return (
      <View>
        <ScrollView>
          {this.state.hottest.map((food, index) => {
            console.log(food);
            return (
              <NewHotCard
                key={index}
                food={food}
                ToSingleItem={this.props.ToSingleItem}
              />
            );
          })}
        </ScrollView>
      </View>
    );
  }
}
