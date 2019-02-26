import  React, { Component } from 'react';
import {StyleSheet, View, Text} from 'react-native'

class AddNewDeck extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>Add New Deck</Text>
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

export default AddNewDeck