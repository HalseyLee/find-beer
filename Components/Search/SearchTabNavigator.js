//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

import { TabNavigator } from "react-navigation";

import { Footer, FooterTab, Button, Icon } from "native-base";

import SearchTab from "./tabNavigator/SearchTab";
import FavouritesTab from "./tabNavigator/FavouritesTab";
import { Form } from "native-base";
// create a component
// class SearchTaNavigator extends Component {
//   render() {
//     return (
//       <View style={styles.container}>
//         <Text>SearchTaNavigator</Text>
//       </View>
//     );
//   }
// }

const SearchTabNavigator = TabNavigator(
    {
        SearchTab: { screen: SearchTab },
        FavouritesTab: { screen: FavouritesTab }
    },
    {
        tabBarPosition: "bottom",
        tabBarComponent: props => {
            return (
                <Footer>
                    <FooterTab>
                        <Button
                            vertical
                            active={props.navigationState.index === 0}
                            onPress={() =>
                                props.navigation.navigate("SearchTab")
                            }
                        >
                            <Icon name="beer" />
                            <Text> Search </Text>
                        </Button>
                        <Button
                            vertical
                            active={props.navigationState.index === 1}
                            onPress={() =>
                                props.navigation.navigate("FavouritesTab")
                            }
                        >
                            <Icon name="star" />
                            <Text> Favourites </Text>
                        </Button>
                    </FooterTab>
                </Footer>
            );
        }
    }
);

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
export default SearchTabNavigator;
