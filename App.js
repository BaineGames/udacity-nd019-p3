import React from 'react';
import {TabNavigator, StackNavigator} from "react-navigation";
import { Ionicons } from "@expo/vector-icons"
import { createStore } from "redux";
import { Provider } from "react-redux";
import deckStuff from "./reducers"


import SelectDeck from "./components/SelectDeck"
import AddNewDeck from "./components/AddNewDeck"
import DeckView from "./components/DeckView"
import AddNewQuestion from "./components/AddNewQuestion"
import Quiz from "./components/Quiz"

const Nav = TabNavigator({
  SelectDeck: {
    screen: SelectDeck,
    navigationOptions: {
      tabBarLabel: "Select Deck",
      tabBarIcon: ({tintColor})  => <Ionicons name='ios-bookmarks' size={30} color={tintColor} />
    }
  },
  AddNewDeck: {
    screen: AddNewDeck,
    navigationOptions: {
      tabBarLabel: "Add Deck",
      tabBarIcon: ({tintColor})  => <Ionicons name='ios-add' size={30} color={tintColor} />
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
  },
  DeckView: {
    screen: DeckView
  },
  AddNewQuestion: {
    screen: AddNewQuestion
  },
  Quiz: {
    screen: Quiz
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
