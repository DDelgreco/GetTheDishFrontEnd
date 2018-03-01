import React, { Component } from "react";
import { View }from "react-native";
import { Header, Item, Input, Icon, Button, Text } from "native-base";

export default class SearchBar extends Component {
  render() {
    return (
      <View>
        <Header searchBar rounded style={{backgroundColor: '#0099ff'}}>
          <Item>
            <Icon name="ios-search" />
            <Input placeholder="What are you hungry for?" />
          </Item>
          <Button transparent rounded>
            <Text sylet={{}}>Search</Text>
          </Button>
        </Header>
      </View>
    );
  }
}
