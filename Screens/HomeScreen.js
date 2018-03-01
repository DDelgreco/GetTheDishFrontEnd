import React, { Component } from "react";
import { View }from "react-native";
import { Button, Text } from "native-base"

export default class HomeScreen extends component {
    render() {
        return(
            <View>
                <Text>Welcome</Text>
                <Button rounded>
                    <Text>Search</Text>
                </Button>
            </View>
        )
    }
}