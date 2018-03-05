import React, { Component } from "react";
import { ScrollView } from "react-native";
import { Text } from "native-base";
import FoodTypeCard from '../components/FoodTypeCard'
import SearchBar from '../components/SearchBar';

export default class FoodType extends Component {

  static navigationOptions = {
    title: "Food Types "
}
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
  render() {
    return (
      <ScrollView>
        <SearchBar />
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
    );
  }
}
