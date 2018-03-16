import React, { Component } from "react";
import { Button, Icon, Text } from "native-base";
import { AsyncStorage, StyleSheet } from "react-native";

export default class RatingButton extends Component {
  constructor(props) {
    super(props);
    this.state = { rating: 0, isVotedOn: false, buttonVoter: styles.buttonColorFalse };
  }

  async componentDidMount() {
    let rating = await this.getRating();
    this.setState({ rating });
  }

  async getRating() {
    let request = new Request(
      `https://still-harbor-63243.herokuapp.com/api/rating/${this.props.id}`,
      {
        method: "GET"
      }
    );

    try {
      let results = await fetch(request);
      let rating = await results.json();
      return rating[0].Rating;
    } catch (error) {
      alert("You must be logged in to vote!");
    }
  }

  async onClick() {

    let token = await AsyncStorage.getItem("auth");

    if (!token) {
      return alert("You must me logged in to vote!");
    } else {

      this.setState({ isVotedOn: !this.state.isVotedOn });

      try {

        if (!this.state.isVotedOn) {
          this.setState({ buttonVoter: styles.buttonColorFalse })
          let rating = await this.removeRating();
          let newRating = this.state.rating;
          newRating--;
          this.setState({ rating: newRating })
        } else {
          this.setState({ buttonVoter: styles.buttonColorTrue })
          let rating = await this.addRating();
          let newRating = this.state.rating;
          newRating++;
          this.setState({ rating: newRating });
        }

      } catch (error) {
        alert("You must be logged in to vote!");
      }
    }
  }

  async addRating() {
    let token = await AsyncStorage.getItem("auth");

    let request = new Request(
      `https://still-harbor-63243.herokuapp.com/api/rating/${this.props.id}/`,
      {
        method: "PUT",
        headers: { Authorization: `Bearer ${token}` }
      }
    );

    let results = await fetch(request);
    let rating = await results.json();
    return rating[0].Rating;
  }

  async removeRating() {
    let token = await AsyncStorage.getItem("auth");

    let request = new Request(
      `https://still-harbor-63243.herokuapp.com/api/rating/${this.props.id}/`,
      {
        method: "POST",
        headers: { Authorization: `Bearer ${token}` }
      }
    );

    let results = await fetch(request);
    let rating = await results.json();
    return rating[0].Rating;
  }

  render() {
    return (
      <Button
        style={[this.props.buttonStyle, this.state.buttonVoter]}
        onPress={() => {
          this.onClick();
        }}
      >
        <Icon name={this.props.iconName} style={this.props.iconStyle} />
        <Text style={this.props.textStyle}>{this.state.rating}</Text>
      </Button>
    );
  }
}

const styles = StyleSheet.create({
  buttonColorTrue: { backgroundColor: 'orange' },
  buttonColorFalse: { backgroundColor: '#62B1F6' }
});