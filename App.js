import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import SelectDeck from "./components/SelectDeck"

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <SelectDeck></SelectDeck>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
