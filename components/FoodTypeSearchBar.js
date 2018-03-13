import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Autocomplete from "react-native-autocomplete-input";

export default class FoodTypeSearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = { data: [], query: "" };
  }

  async componentDidMount() {
    let data = await this.fetchTypes();
    this.setState({ data });
  }

  async fetchTypes() {
    try {
      let results = await fetch({
        url: `https://still-harbor-63243.herokuapp.com/api/type/`
      });
      let restaurants = await results.json();
      return restaurants;
    } catch (error) {
      console.log(error);
      return [];
    }
  }

  findType(query) {
    if (query === "") {
      return [];
    }

    const { data } = this.state;
    const regex = new RegExp(`${query.trim()}`, "i");
    return data.filter(data => data.name.search(regex) >= 0);
  }

  handleSearchInput(text) {
    this.setState({ query: text });
  }

  async handleDropListSelect(name, id) {
    this.setState({ query: name });
    this.props.onTypeSelect(id);
  }

  render() {
    const { query } = this.state;
    const data = this.findType(query);
    const comp = (a, b) => a.toLowerCase().trim() === b.toLowerCase().trim();

    return (
      <View>
        <View style={styles.container}>
          <Autocomplete
            containerStyle={styles.autocompleteContainer}
            listStyle={styles.listThing}
            data={data.length === 1 && comp(query, data[0].name) ? [] : data}
            defaultValue={this.state.query}
            placeholder={"Pick Food Type"}
            autoCorrect={false}
            onChangeText={text => this.handleSearchInput(text)}
            renderItem={({ name, id }) => (
              <TouchableOpacity
                onPress={() => this.handleDropListSelect(name, id)}
              >
                <Text style={styles.itemText}>{name}</Text>
              </TouchableOpacity>
            )}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 25
  },
  autocompleteContainer: {
    marginLeft: 10,
    marginRight: 10
  },
  descriptionContainer: {
    backgroundColor: "#F5FCFF",
    marginTop: 8
  },
  listThing: {
    backgroundColor: "lightgray"
  },
  itemText: {
    fontSize: 15,
    margin: 2
  }
});
