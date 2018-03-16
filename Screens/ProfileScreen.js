import React, { Component } from "react";
import {
  Image,
  ScrollView,
  View,
  StyleSheet,
  AsyncStorage
} from "react-native";
import { Card, Text, Button, Icon } from "native-base";
import NavBar from "../components/NavBar";
import SignOutButton from "../components/SignOutButton";

export default class ProfileScreen extends Component {

  constructor(props) {
    super(props);
    this.state = { data: {} };
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
  toLogIn() {
    this.props.navigation.navigate("LogIn");
  }
  async componentDidMount() {
    let data = await this.getUser();
    this.setState({ data });
  }
  async getUser() {
    let token = await AsyncStorage.getItem("auth");

    let request = new Request(
      `https://still-harbor-63243.herokuapp.com/api/users/me`,
      {
        method: "GET",
        headers: { Authorization: `Bearer ${token}` }
      }
    );
    return request;

    let results = await fetch(request);
    results = JSON.parse(results);
    return results;
  }



  async componentDidMount() {
    let data = await this.getProfile();
    this.setState({ data });
  }


  async getProfile() {
    
    let token = await AsyncStorage.getItem("auth");

    let request = new Request(
      `https://still-harbor-63243.herokuapp.com/api/users/me`,
      {
        method: "GET",
        headers: { "Authorization": `Bearer ${token}` },
      }
    );

    let results = await fetch(request);
    let parsedResults = JSON.parse(results._bodyInit);
    return parsedResults;

  }

  render() {
    return (
      <View style={styles.View}>
        <ScrollView>
          <Card style={styles.Card}>
            <Image
              source={require("../pictures/profile.png")}
              style={styles.Image}
            />
            <Text style={styles.Name}>{this.state.data.first_name}</Text>
            <Text style={styles.Email} note>
              test@test.com
            </Text>
            <Text style={styles.History}>User History</Text>
            <Text>
              Voted on some stuff and added some other stuff and did some other
              stuff once but didn't tell anyone cause they hate the spotlight.
              It really all started when they were really little and had
              self-image issues and wanted to avoid confrontation. But thats
              another story. So, yeah.
            </Text>
          </Card>
          <SignOutButton
            Home={() => {
              this.props.navigation.navigate("Home");
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

const styles = StyleSheet.create({
  View: { flex: 1, backgroundColor: "dimgray" },
  Card: { width: "90%", alignSelf: "center", marginTop: 15, padding: 20 },
  Icon: { fontSize: 100 },
  Name: { fontSize: 25, alignSelf: "center" },
  Email: { fontSize: 20, alignSelf: "center" },
  Image: { height: 150, width: 150, alignSelf: "center" },
  History: {
    marginTop: 30,
    fontSize: 30,
    alignSelf: "center",
    textDecorationLine: "underline"
  }
});
