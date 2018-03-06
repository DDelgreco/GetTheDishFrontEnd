import React, { Component } from "react";
import { ScrollView, View } from "react-native";
import { Text, Header, Item, Input, Icon, Button } from "native-base";
import FoodTypeCard from "../components/FoodTypeCard";

import NavBar from "../components/NavBar";

export default class FoodType extends Component {
  static navigationOptions = {
    title: "Food Types "
  };
  constructor(props) {
    super(props);
    this.state = { types: [], search: "" };
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
    let filteredTypes = this.state.types;
    let search = this.state.search;
    if (search.length > 0) {
      filteredTypes = filteredTypes.filter(type => {
        return type.name.match(search);
      });
    }
    return (
      <View style={{ flex: 1 }}>
        <ScrollView>
          <View>
            <Header searchBar rounded style={{ backgroundColor: "#0099ff" }}>
              <Item>
                <Icon name="ios-search" />
                <Input
                  placeholder="What are you hungry for?"
                  onChangeText={text => this.setState({ search: text })}
                />
              </Item>
              <Button transparent rounded>
                <Text>Search</Text>
              </Button>
            </Header>
          </View>
          <Text style={{ textAlign: "center" }} />
          {filteredTypes.map((type, index) => {
            return (
              <FoodTypeCard
                key={index}
                name={type.name}
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
