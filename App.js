import React from 'react';
import { Text, View } from 'react-native';
import {TabNavigator, StackNavigator} from "react-navigation";
import { Ionicons } from "@expo/vector-icons"
import { createStore } from "redux";
import { Provider } from "react-redux";
import deckStuff from "./reducers"


import SelectDeck from "./components/SelectDeck"


export default class App extends React.Component {

  render() {
    return (
      <Provider store={createStore(deckStuff)}>
      </Provider>
    )
  }
}
