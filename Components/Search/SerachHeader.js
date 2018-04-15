//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Header, Item, Icon, Input } from "native-base";
// create a component
class SearchHeader extends Component {
    render() {
        return (
            <Header style={{ height: 80 }} searchBar rounded>
                <Item>
                    <Icon name="ios-search" />
                    <Input
                        placeholder="Enter beer name"
                        OnchangeText={this.props.onChangeText}
                        returnKeyType="search"
                        onSubmitEditing={this.props.beerSearch}
                    />
                </Item>
            </Header>
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
export default SearchHeader;
