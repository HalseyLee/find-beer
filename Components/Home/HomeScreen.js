//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { Button } from "native-base";
var backgroundImage = require("../../assets/home-screen-background.jpg");
// create a component
class HomeScreen extends Component {
  static navigationOptions = {
    header: null
  };
  render() {
    return (
      <View style={styles.homeScreen}>
        <View
          style={{
            position: "absolute",
            top: 0,
            height: "100%",
            width: "100%"
          }}
        >
          <Image
            source={backgroundImage}
            style={{ flex: 1, height: null, width: null }}
          />
        </View>
        <Button
          block={true}
          onPress={() => {
            this.props.navigation.navigate("SearchTabNavigator");
          }}
        >
          <Text style={{ color: "white" }}>Search Beer</Text>
        </Button>
      </View>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  homeScreen: {
    flex: 1,
    justifyContent: "flex-end"
  }
});

//make this component available to the app
export default HomeScreen;
