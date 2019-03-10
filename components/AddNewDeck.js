import  React, { Component } from 'react';
import {StyleSheet, View, Text, TextInput, Button} from 'react-native'
import { addDeck } from "../actions"
import {connect } from "react-redux"


class AddNewDeck extends Component {

    state = {
        inputText: ''
    }

    btnPress = () => {
        const { inputText } = this.state
        //alert(inputText)
        this.props.dispatch(addDeck(inputText))
        this.props.navigation.navigate('SelectDeck')
    }
    render() {
        return (
            <View style={styles.container}>
                <Text>Add New Deck</Text>
                <TextInput style={styles.input}
                           onChangeText={(newText) => this.setState({inputText: newText})}
                           value={this.state.inputText}></TextInput>
                <Button
                title="Add New Deck" 
                onPress={(this.btnPress)}/>
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

export default connect()(AddNewDeck)