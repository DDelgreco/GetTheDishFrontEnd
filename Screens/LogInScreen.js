import React, { Component } from "react";
import { Header, Form, Item, Input, Label, Button, Text } from "native-base";
import { StyleSheet, ScrollView, View } from "react-native";
import NavBar from "../components/NavBar";
export default class LogIn extends Component {
  static navigationOptions = {
    title: "Get The Dish"
  };
  constructor(props) {
    super(props);
  }

  toSignUp() {
    this.props.navigation.navigate("SignUp");
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
            <Item floatingLabel>
              <Label>E-Mail</Label>
              <Input />
            </Item>
            <Item floatingLabel last>
              <Label>Password</Label>
              <Input secureTextEntry={true}/>
            </Item>
            <Button info style={styles.Button}>
              <Text>Log In</Text>
            </Button>
            <Item />
          </Form>
          <Text style={styles.Divider}>________________</Text>
          <Text style={styles.Text}>Don't have an account?{"\n"}Sign Up!</Text>
          <Button
            onPress={() => {
              this.toSignUp();
            }}
            info
            style={styles.Button}
          >
            <Text>Sign Up</Text>
          </Button>
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
    marginTop: 20
  },
  View: { backgroundColor: "dimgray", flex: 1 },
  Divider: { fontSize: 40, textAlign: "center", color: "white", margin: 20 }
});
