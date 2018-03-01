import React, { Component } from "react";
import { Image, View } from "react-native";
import { Text } from "native-base";


export default class SingleItem extends Component {

    constructor(props) {
        super(props);
        this.food = this.props.navigation.state.params.food;
    }
    render() {
        return(
            <View>
                <Text>
                    {JSON.stringify(this.food)}
                </Text>
            </View>
        )
    }
};