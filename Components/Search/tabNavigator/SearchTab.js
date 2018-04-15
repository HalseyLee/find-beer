//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet, Keyboard } from "react-native";

import { Container, Content } from "native-base";

import axios from "axios";

import SearchHeader from "../SerachHeader";
// create a component
class SearchTab extends Component {
    static navigationOptions = {
        header: null
    };

    state = {
        searchBeer: "",
        berData: {}
    };

    beerSearch = () => {
        //alert("search for beer");
        Keyboard.dismiss();
        const beerName = this.state.searchBeer.toLowerCase();
        const query =
            "https://api.brewerydb.com/v2/search?q=" +
            beerName +
            "&type=beer&key=2e97681b46666b733eaf24a940bc7e85";

        axios.get(query).then(response => {
            console.log(response);
        });
    };

    render() {
        return (
            <Container>
                <SearchHeader
                    value={this.state.searchBeer}
                    onChangeText={searchBeer => {
                        this.setState({ searchBeer });
                    }}
                    beerSearch={this.beerSearch}
                />
                <Content />
            </Container>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#2c3e50"
    }
});

//make this component available to the app
export default SearchTab;
