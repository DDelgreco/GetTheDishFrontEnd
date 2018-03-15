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
    this.state = {
      first_name: '',
      last_name: '',
      email: '',
      password: ''
    };
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
              <Input
                value={this.state.first_name}
                onChangeText={(text) => this.setState({ first_name: text })} />
            </Item>
            <Item floatingLabel last>
              <Label>Last Name</Label>
              <Input
                value={this.state.last_name}
                onChangeText={(text) => this.setState({ last_name: text })} />
            </Item>
            <Item floatingLabel>
              <Label>E-Mail</Label>
              <Input
                autoCapitalize={"none"}
                keyboardType={'email address'}
                value={this.state.email}
                onChangeText={(text) => this.setState({ email: text })} />
            </Item>
            <Item floatingLabel last>
              <Label>Password</Label>
              <Input
                autoCapitalize={"none"}
                secureTextEntry={true}
                value={this.state.password}
                onChangeText={(text) => this.setState({ password: text })} />
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
