import React, { Component } from "react";
import { ScrollView, View, StyleSheet} from "react-native";
import { Form, Item, Input, Label, Button, Text } from "native-base";
import PostDishButton from "../components/PostDishButton";
import NavBar from "../components/NavBar";

export default class NewItem extends Component {
  static navigationOptions = {
    title: "New Dish"
  };
  navigate() {
    this.props.navigation.navigate("FoodTypes");
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
    return (
      <View style={styles.View}>
        <ScrollView>
          <Form style={styles.Form}>
            <Item floatingLabel>
              <Label>Name of Dish</Label>
              <Input />
            </Item>
            <Item floatingLabel>
              <Label>Restaurant</Label>
              <Input />
            </Item>
            <Item floatingLabel>
              <Label>Price</Label>
              <Input />
            </Item>
            <PostDishButton />
          </Form>
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
 View: {flex: 1, backgroundColor: 'dimgray'},
 Form: {
  backgroundColor: "white",
  width: "90%",
  alignSelf: "center",
  marginTop: 20
},
});
