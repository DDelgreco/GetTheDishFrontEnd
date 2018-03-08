import React, { Component } from "react";
import { ScrollView, View } from "react-native";
import SingleItemCard from "../components/SingleItemCard";
import NavBar from "../components/NavBar";


export default class SingleItem extends Component {

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

  constructor(props) {
    super(props);
    this.food = this.props.navigation.state.params.food;
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <ScrollView>
          <SingleItemCard
            food={this.food}
            Navigate={() => {
              this.navigate(food);
            }}
          />
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
