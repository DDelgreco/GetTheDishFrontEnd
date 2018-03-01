import React, { Component } from "react";
import { Image, View } from "react-native";
import { Text } from "native-base";


export default class SingleItem extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return(
            <View>
                <Text>
                    {JSON.stringify(this.props.food)}
                </Text>
            </View>
        )
    }
};