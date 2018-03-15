import React, { Component } from "react";
import { Header, Form, Item, Input, Label, Button, Text } from "native-base";
import { StyleSheet, ScrollView, View, AsyncStorage } from "react-native";
import SignOutButton from "../components/SignOutButton";
import NavBar from "../components/NavBar";

export default class LogIn extends Component {
  static navigationOptions = {
    title: "Get The Dish"
  };
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
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
  toProfile() {
    this.props.navigation.navigate("Profile");
  }

  async handleLogin() {
    let data = {
      email: this.state.email,
      password: this.state.password
    };

    let request = new Request(
      `https://still-harbor-63243.herokuapp.com/api/auth/login`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
      }
    );

    try {
      let results = await fetch(request);
      if (results.status !== 201) {
        return await alert("Invalid email or password!");
      } else {
        let parsedResults = JSON.parse(results._bodyInit);
        let token = parsedResults.token;
        let stringedToken = JSON.stringify(token);

        await this.handleStoreAuthToken(stringedToken);
        await this.props.Home;
      }
    } catch (error) {
      console.log(error);
    }
    this.toProfile();
  }

  async handleStoreAuthToken(token) {
    try {
      await AsyncStorage.setItem("auth", token);
    } catch (error) {
      console.log("error storing token: ", error);
    }
  }

  render() {
    return (
      <View style={styles.View}>
        <ScrollView>
          <Form style={styles.Form}>
            <Item floatingLabel>
              <Label>E-Mail</Label>
              <Input
                autoCapitalize={"none"}
                onChangeText={email => this.setState({ email })}
                value={this.state.email}
              />
            </Item>
            <Item floatingLabel last>
              <Label>Password</Label>
              <Input
                autoCapitalize={"none"}
                secureTextEntry={true}
                onChangeText={password => this.setState({ password })}
              />
            </Item>
            <Button
              info
              style={styles.Button}
              onPress={() => this.handleLogin()}
            >
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
