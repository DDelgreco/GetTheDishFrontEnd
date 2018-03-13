import React, { Component } from "react";
import { Button, Text, Icon, Header } from "native-base";
import { ScrollView, View, StyleSheet } from "react-native";
import NavBar from "../components/NavBar";
import HotItems from "../components/HotItems";
import LatestItems from "../components/LatestItems";
import NewHotCard from "../components/NewHotCard";

export default class HomeScreen extends Component {
  static navigationOptions = {
    title: "Get The Dish"
  };
  constructor(props) {
    super(props);

    this.state = {
      hottest: [],
      latest: []
    };
  }
  async componentDidMount() {
    let hottest = await this.fetchHottest();
    this.setState({ hottest });
    let latest = await this.fetchLatest();
    this.setState({ latest });
  }
  async fetchHottest() {
    try {
      let results = await fetch({
        url: `https://still-harbor-63243.herokuapp.com/api/homescreen/hottest`
      });
      let hottest = await results.json();
      return hottest;
    } catch (error) {
      console.log(error);
      return [];
    }
  }
  async fetchLatest() {
    try {
      let results = await fetch({
        url: `https://still-harbor-63243.herokuapp.com/api/homescreen/latest`
      });
      let latest = await results.json();
      return latest;
    } catch (error) {
      console.log(error);
      return [];
    }
  }

  navigate(food) {
    this.props.navigation.navigate("SingleItem", { food });
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

  render() {
    return (
      <View style={styles.View}>
        <ScrollView>
          <Header style={styles.Header}>
            <Icon name="ios-flame" style={styles.Icon} />
            <Text style={styles.Text}> Hot Items</Text>
          </Header>
          {this.state.hottest.map((food, index) => {
            return (
              <NewHotCard
                Navigate={() => {
                  this.navigate(food);
                }}
                food={food}
                key={index}
              />
            );
          })}
          <Header style={styles.Header}>
            <Icon name="ios-timer" style={styles.Icon} />
            <Text style={styles.Text}> Latest Items</Text>
          </Header>
          {this.state.latest.map((food, index) => {
            return (
              <NewHotCard
                Navigate={() => {
                  this.navigate(food);
                }}
                food={food}
                key={index}
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
  View: { flex: 1, backgroundColor: "dimgray" },
  Header: {
    width: "100%",
    backgroundColor: "dimgray"
  },
  Icon: {
    fontSize: 40,
    color: "orange"
  },
  Text: {
    fontSize: 30,
    fontWeight: "bold",
    color: "white"
  }
});
