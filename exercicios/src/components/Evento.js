import React, { Component } from 'react'
import { View, Text, TextInput } from 'react-native'
import Padrao from '../style/Padrao'

export default class Evento extends Component {

    state = {
        text: ''
    }

    handleChangeText = text => {
        this.setState({ text })
    }

    render() {

        return (
            <View>
                <TextInput 
                    value={this.state.text} 
                    style={Padrao.input}
                    placeholder='Digite algo'
                    onChangeText={this.handleChangeText}
                />

                <Text style={Padrao.fonte40}>{this.state.text}</Text>
            </View>
        )
    }
}
