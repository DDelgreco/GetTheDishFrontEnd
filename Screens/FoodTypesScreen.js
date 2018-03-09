import React, { Component } from "react";
import { ScrollView, View, StyleSheet } from "react-native";
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
    this.props.navigation.navigate("SingleType", {type});
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
  toLogIn(){
    this.props.navigation.navigate("LogIn");
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
      <View style={{ flex: 1, backgroundColor: 'dimgrey' }}>
        <ScrollView>
          <View>
            <Header searchBar rounded style={styles.Header}>
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
          <Text style={styles.Text} />
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
  Header: {
    backgroundColor: "#62B1F6"
  },
  Text: {
    textAlign: "center"
  }
});
