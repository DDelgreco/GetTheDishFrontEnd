import React, { Component } from "react";
import { View } from "react-native";
import { Button, Text } from "native-base";
import ItemCard from '../components/ItemCard';

export default class HomeScreen extends Component {

    static navigationOptions = {
        title: "Get The Dish"
    }

    constructor(props) {
        super(props);
        this.state = { foods: [] };
    }
    async componentDidMount() {
        let foods = await this.fetchFoods();
        this.setState({ foods });
    }

    async fetchFoods() {
        try {
            let results = await fetch({
                url: "https://still-harbor-63243.herokuapp.com/api/items/"
            });
            let foods = await results.json();
            return foods;
        } catch (error) {
            console.log(error);
            return [];
        }
    }
    navigate(food) {
        this.props.navigation.navigate("SingleItem", { food });
    }

    render() {
        return (
            <View>
                {this.state.foods.map((food, index) => {
                    return (
                        <ItemCard
                            key={index}
                            food={food}
                            Navigate={() => {
                                this.navigate(food)
                            }}
                        />
                    );
                })}
            </View>
        );
    }
}