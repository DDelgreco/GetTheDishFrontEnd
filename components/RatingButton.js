import React, { Component } from 'react';
import { Button, Icon, Text } from 'native-base';
import { AsyncStorage } from 'react-native';

export default class RatingButton extends Component {

    constructor(props) {
        super(props);
        this.state = { rating: 0 };
    }

    async componentDidMount() {
        let rating = await this.getRating();
        this.setState({ rating });
    }

    async getRating() {

        let request = new Request(`https://still-harbor-63243.herokuapp.com/api/rating/${this.props.id}`, {
            method: 'GET'
        });

        try {
            let results = await fetch(request);
            let rating = await results.json();
            return rating[0].Rating;
        } catch (error) {
            alert('You must be logged in to vote!');
        }

    }

    async onClick() {
        try {
            let rating = await this.putRating();
            let newRating = this.state.rating
            newRating++;
            this.setState({ rating: newRating });
        } catch (error) {
            alert('You must be logged in to vote!');
        }
    }

    async putRating() {

        let token = await AsyncStorage.getItem("auth");

        let request = new Request(`https://still-harbor-63243.herokuapp.com/api/rating/${this.props.id}`, {
            method: 'PUT',
            headers: { 'Authorization': `Bearer ${token}` }
        });

        let results = await fetch(request);
        let rating = await results.json();
        return rating[0].Rating;

    }

    render() {
        return (
            <Button info
                style={this.props.buttonStyle}
                onPress={() => { this.onClick() }}>
                <Icon name={this.props.iconName} style={this.props.iconStyle} />
                <Text style={this.props.textStyle}>{this.state.rating}</Text>
            </Button>
        );
    }

};