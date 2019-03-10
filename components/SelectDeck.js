import  React, { Component } from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native'
import { pullData } from '../utilities/_DATA';
import { loadDecks } from "../utilities/api"
import { connect } from "react-redux"
class SelectDeck extends Component {

    componentDidMount(){
        //get decks here from api
        this.props.loadedDecks = loadDecks();
    }
    render() {
        
        const {loadedDecks } = this.props

        console.log("props", this.props)
        console.log("HEY",loadedDecks)
        
        return (
            <View style={styles.container}> 
            <Text>Select Deck</Text>
            {
                Object.keys(loadedDecks).map((individualDeck) =>{
                    const { label, questions } = loadedDecks[individualDeck];
                    return (
                        <TouchableOpacity key={label} style={styles.individualDeck}
                        onPress={() => this.props.navigation.navigate("DeckView", {deck: label})}>
                            <Text style={styles.header}>{label}</Text>
                            <Text>{questions.length} Card(s)</Text>
                        </TouchableOpacity>
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


function mapStateToProps(loadedDecks){
    return {loadedDecks}
}

export default connect(mapStateToProps)(SelectDeck)