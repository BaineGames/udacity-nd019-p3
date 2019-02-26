import React from 'react';
import { Text, View } from 'react-native';
import {TabNavigator, StackNavigator} from "react-navigation";
import { Ionicons } from "@expo/vector-icons"
import { createStore } from "redux";
import { Provider } from "react-redux";
import deckStuff from "./reducers"


import SelectDeck from "./components/SelectDeck"
import AddNewDeck from "./components/AddNewDeck"

const Nav = TabNavigator({
  SelectDeck: {
    screen: SelectDeck,
    navigationOptions: {
      tabBarLabel: "Select Deck"
    }
  },
  AddNewDeck: {
    screen: AddNewDeck,
    navigationOptions: {
      tabBarLabel: "Add Deck"
    }
  }
},{
  navigationOptions: {
    header:null
  }
})

const MainStack = StackNavigator({
  Home: {
    screen: Nav
  }
})


export default class App extends React.Component {

  render() {
    return (
      <Provider store={createStore(deckStuff)}>
      <MainStack />
      </Provider>
    )
  }
}
