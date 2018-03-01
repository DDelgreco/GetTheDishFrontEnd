import React, { Component } from "react";
import SearchBar from "../components/SearchBar";
import CardList from "../components/CardList";

export default class TypeScreen extends Component {
    render() {
        return(
            <View>
                <SearchBar />
                <CardList />
            </View>
        )
    }
}