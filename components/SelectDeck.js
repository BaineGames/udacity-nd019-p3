import  React, { Component } from 'react';
import {StyleSheet, View, Text} from 'react-native'
import { pullData } from '../utilities/_DATA';

class SelectDeck extends Component {

    componentDidMount(){
        //get decks here from api
        // console.log(startingData)
        // this.props.data = startingData
    }
    render() {
        const data = pullData();
        return (
            <View style={styles.container}>
            <Text>Select Deck</Text>
            {
                Object.keys(data).map((individualDeck) =>{
                    const { label, questions } = data[individualDeck];
                    return (
                        <View key={label}>
                            <Text>{label} - {questions.length}</Text>
                        </View>
                    )
                })
            }
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