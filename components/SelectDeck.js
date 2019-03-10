import  React, { Component } from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native'
import { connect } from "react-redux"

class SelectDeck extends Component {

    render() {
        
        const {loadedDecks } = this.props
        
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