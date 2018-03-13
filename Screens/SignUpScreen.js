import React, { Component } from "react";
import { Header, Form, Item, Input, Label, Button, Text } from "native-base";
import { StyleSheet, ScrollView, View, Image } from "react-native";
import NavBar from "../components/NavBar";

export default class SignUp extends Component {
  static navigationOptions = {
    title: "Get The Dish"
  };
  constructor(props) {
    super(props);
  }

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
  toSingleItem(food) {
    this.props.navigation.navigate("NewHotSingles");
  }
  toLogIn() {
    this.props.navigation.navigate("LogIn");
  }

  render() {
    return (
      <View style={styles.View}>
        <ScrollView>
          <Form style={styles.Form}>
            <Item floatingLabel last>
              <Label>First Name</Label>
              <Input />
            </Item>
            <Item floatingLabel last>
              <Label>Last Name</Label>
              <Input />
            </Item>
            <Item floatingLabel>
              <Label>E-Mail</Label>
              <Input />
            </Item>
            <Item floatingLabel last>
              <Label>Password</Label>
              <Input />
            </Item>

            <Button info style={styles.Button}>
              <Text>Sign Up</Text>
            </Button>
          </Form>
          <Image
          // style={{alignSelf: 'center', height:150, width: 200, marginTop: 30}}
          //       source={require("../pictures/a.png")}
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

const styles = StyleSheet.create({
  Button: { alignSelf: "center", margin: 10 },
  Text: {
    fontWeight: "bold",
    fontSize: 25,
    textAlign: "center",
    color: "white",
    margin: 20
  },
  Form: {
    backgroundColor: "white",
    width: "90%",
    alignSelf: "center",
    marginTop: 30
  },
  View: { backgroundColor: "dimgray", flex: 1 },
  Divider: { fontSize: 40, textAlign: "center", color: "white", margin: 20 }
});
