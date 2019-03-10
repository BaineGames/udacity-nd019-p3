import  React, { Component } from 'react';
import {StyleSheet, View, Text, Button} from 'react-native'
import { connect } from "react-redux"
class Quiz extends Component {

    state = {
        startingNumber: 0,
        showAnswer: false,
        right: 0,
        wrong: 0
    }

    right = () => {
        this.setState({right: this.state.right +1})
        this.setState({startingNumber: this.state.startingNumber +1})
    }

    wrong = () => {
        this.setState({wrong: this.state.wrong +1})
        this.setState({startingNumber: this.state.startingNumber +1})
    }

    restart = () => {
        this.setState({right: 0})
        this.setState({wrong:0})
        this.setState({startingNumber:0})
    }

    render() {

        const {loadedDecks} = this.props
        const deck = this.props.navigation.state.params.deck
        const startingNumber = this.state.startingNumber + 1;

        if(this.state.right + this.state.wrong == loadedDecks[deck].questions.length){
            return (
                <View style={styles.container}> 
                    <Text>{deck} Quiz</Text>
                    <Text>{loadedDecks[deck].questions.length} Card(s)</Text>
                    <Text>Correct Answer Score: {this.state.right}</Text>
                    <Button title="Restart Quiz"
                        onPress={() => this.restart()} />
                    <Button title="Select Deck"
                        onPress={() => this.props.navigation.navigate("SelectDeck")} />
                </View>
            )
        }

        return (
            <View style={styles.container}> 
                <Text>{deck} Quiz</Text>
                <Text>{loadedDecks[deck].questions.length} Card(s)</Text>
                <Text>Question number: {startingNumber}</Text>
                <Text>Questions remaining: {loadedDecks[deck].questions.length - startingNumber}</Text>
                <Text>Question: {loadedDecks[deck].questions[startingNumber - 1].label}</Text>

                {this.state.showAnswer ? 
                    <Text>Answer: {loadedDecks[deck].questions[startingNumber - 1].answer}</Text> 
                : 
                    <Button title="Show Answer" onPress={() => this.setState({showAnswer: !this.state.showAnswer})} />
                }

                <Button title="Correct"
                    onPress={() => this.right()} />
                <Button title="Incorrect"
                    onPress={() => this.wrong()} />
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

export default connect(mapStateToProps)(Quiz)