import  React, { Component } from 'react';
import {StyleSheet, View, Text} from 'react-native'
import { pullData } from '../utilities/_DATA';
import { loadDecks } from "../utilities/api"
class SelectDeck extends Component {

    componentDidMount(){
        //get decks here from api
        // console.log(startingData)
        // this.props.data = startingData
    }
    render() {
        
        return (
            <View style={styles.container}>
            <Text>Select Deck</Text>
            {
                Object.keys(data).map((individualDeck) =>{
                    const { label, questions } = data[individualDeck];
                    return (
                        <View key={label} style={styles.individualDeck}>
                            <Text style={styles.header}>{label}</Text>
                            <Text>{questions.length} Card(s)</Text>
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
    },
    individualDeck: {
        backgroundColor:'#ccc',
        width: "80%",
        alignItems:'center',
        fontSize:24,
        margin: 10,
        height:100,
        
    },
    header:{
        fontSize:48
    }
})

export default SelectDeck