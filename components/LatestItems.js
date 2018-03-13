import React, { Component } from "react";
import { ScrollView, View } from "react-native";
import { Button, Text } from "native-base";
import NewHotCard from "../components/NewHotCard";

import NavBar from "../components/NavBar";

export default class LatestItems extends Component {
  constructor(props) {
    super(props);
    this.state = { latest: [] };
  }
  async componentDidMount() {
    let latest = await this.fetchLatest();
    this.setState({ latest });
  }

  async fetchLatest() {
    try {
      let results = await fetch({
        url: `https://still-harbor-63243.herokuapp.com/api/homescreen/latest`
      });
      let latest = await results.json();
      return latest;
    } catch (error) {
      console.log(error);
      return [];
    }
  }



  render() {
    return (
      <View>
        <ScrollView>
          {this.state.latest.map((food, index) => {
            return (
              <NewHotCard
                Navigate={() => {
                  this.navigate(food);
                }}
                key={index}
                food={food}
              />
            );
          })}
        </ScrollView>
      </View>
    );
  }
}
