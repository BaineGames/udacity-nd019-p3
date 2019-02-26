import  React, { Component } from 'react';
import {StyleSheet, View, Text} from 'react-native'
import { startingData } from '../utilities/_DATA';

class SelectDeck extends Component {

    componentDidMount(){
        //get decks here from api
        console.log(startingData)
        this.props.data = startingData
    }
    render() {
        return (
            <View style={styles.container}>
            <Text>Select Deck</Text>
            <Text>{JSON.stringify(this.props.data)}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent:'center',
        alignItems:'center',

    }
})

export default SelectDeck