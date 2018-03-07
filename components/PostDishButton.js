import React, { Component } from "react";
import { Button, Icon, Text } from "native-base";
import {StyleSheet} from "react-native";

export default class PostDishButton extends Component {
  constructor(props) {
    super(props);
    this.state = { foods: [] };
  }

  async onClick() {
    let foods = await this.PostDish();
    this.setState({ items });
  }

  async postDish() {
    let request = new Request(
      `https://still-harbor-63243.herokuapp.com/api/items`,
      {
        method: POST
      }
    );

    let results = await fetch(request);
    let foods = await results.json();
    return foods;
  }
  catch(error) {
    console.log(error);
    return [];
  }

  render() {
    return (
      <Button large style={styles.Button}>
        <Text>Post Dish</Text>
      </Button>
    );
  }
}

const styles = StyleSheet.create({
 Button: {alignSelf: 'center', margin: 30}
  });
  