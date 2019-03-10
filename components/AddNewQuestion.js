import  React, { Component } from 'react';
import {StyleSheet, View, Text, TextInput, Button} from 'react-native'
import { addNewQuestion } from "../actions"
import {connect } from "react-redux"


class AddNewQuestion extends Component {

    state = {
        label: '',
        answer: ''
    }

    btnPress = (deck) => {
        const { label, answer } = this.state
        console.log(deck, label, answer)
        //alert(inputText)
        this.props.dispatch(addNewQuestion({deck, label, answer}))
        this.props.navigation.navigate('DeckView', {deck: deck})
    }
    render() {

        const deck = this.props.navigation.state.params.deck
        return (
            <View style={styles.container}>
                <Text>Add New Question</Text>
                <Text>Question Label</Text>
                <TextInput style={styles.input}
                           onChangeText={(newText) => this.setState({label: newText})}
                           value={this.state.label}></TextInput>
                <Text>Question Answer</Text>
                <TextInput style={styles.input}
                           onChangeText={(newText) => this.setState({answer: newText})}
                           value={this.state.answer}></TextInput>
                <Button
                title="Add Question" 
                onPress={() => this.btnPress(deck)}/>
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
    input:{
        width:100,
        height:20,
        backgroundColor: 'rgba(0,0,0,0.1)'
    }
})

export default connect()(AddNewQuestion)