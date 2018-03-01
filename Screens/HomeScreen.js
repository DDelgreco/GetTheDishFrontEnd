import React, { Component } from "react";
import { View }from "react-native";
import { Button, Text } from "native-base"
import CardList from "../components/CardList";

export default class HomeScreen extends Component {

    static navigationOptions = {
        title: "Get The Dish"
    }

    
    render() {
        return(
            <View>
                <CardList />
            </View>
        )
    }
}