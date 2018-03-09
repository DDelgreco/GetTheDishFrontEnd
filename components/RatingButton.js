import React, { Component } from 'react';
import { Button, Icon, Text } from 'native-base';

export default class RatingButton extends Component {

    constructor(props) {
        super(props);
        this.state = { rating: this.props.Rating };
    }

    async componentDidMount() {
        let rating = await this.getRating();
        this.setState({ rating });
    }

    async getRating() {

        let request = new Request(`https://still-harbor-63243.herokuapp.com/api/rating/${this.props.id}`, {
            method: 'GET'
        });

        let results = await fetch(request);
        let rating = await results.json();
        return rating[0].Rating;

    }

    async onClick() {
        let rating = await this.putRating();
        this.setState({ rating });
    }

    async putRating() {

        let request = new Request(`https://still-harbor-63243.herokuapp.com/api/rating/${this.props.id}`, {
            method: 'PUT'
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