import React, { Component } from "react";
import { ScrollView } from "react-native";
import { Button, Text } from "native-base";
import ItemCard from '../components/ItemCard';



export default class SingleType extends Component {

    
    static navigationOptions = {
        title: ''
    }

    constructor(props) {
        super(props);
        this.state = { foods: [], title: "" };
    }
    async componentDidMount() {
        let foods = await this.fetchFoods();
        let title = foods[0].FoodType;
        this.setState({ foods, title });
    }

    async fetchFoods() {
        let id=(this.props.navigation.state.params.type.id)
        try {
            let results = await fetch({
                url: `https://still-harbor-63243.herokuapp.com/api/items/${id}`
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
            <ScrollView>
                <Text style={{ textAlign: 'center' }}>{this.state.title}</Text>
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
            </ScrollView>
        );
    }
}