import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { StackNavigator } from "react-navigation";

import HomeScreen from "./Components/Home/HomeScreen";
import SearchTabNavigator from "./Components/Search/SearchTabNavigator";

// export default class App extends React.Component {
//   render() {
//     return (
//       <View style={styles.container}>
//         <Text>Open up App.js to start working on your app!</Text>
//       </View>
//     );
//   }
// }

const App = StackNavigator({
  HomeScreen: {
    screen: HomeScreen
  },
  SearchTabNavigator: {
    screen: SearchTabNavigator
  }
});

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center"
//   }
// });

export default App;
