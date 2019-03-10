import  React, { Component } from 'react';
import {StyleSheet, View, Text, Button} from 'react-native'
import { connect } from "react-redux"
class DeckView extends Component {

    render() {

        const {loadedDecks} = this.props
        const deck = this.props.navigation.state.params.deck
        
        return (
            <View style={styles.container}> 
            <Text>{deck}</Text>
            <Text>{loadedDecks[deck].questions.length} Card(s)</Text>
            <Button title="Add Question"
            onPress={() => this.props.navigation.navigate("AddNewQuestion", {deck: deck})} />
            {
            loadedDecks[deck].questions.length > 0 ? 
                <Button title="Quiz" onPress={() => this.props.navigation.navigate("Quiz", {deck: deck})} /> 
            : null
            }
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
})

const mapStateToProps = loadedDecks => ({
    loadedDecks
})

export default connect(mapStateToProps)(DeckView)