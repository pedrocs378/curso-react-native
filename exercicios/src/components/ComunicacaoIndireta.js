import React, { Component } from 'react'
import { View, Text, TextInput } from 'react-native'
import Padrao from '../style/Padrao'

export const Entry = props =>
    <View>
        <TextInput value={props.text} style={Padrao.input} onChangeText={props.callWhenChange} />
    </View>

export default class TextSynced extends Component {
    
    state = {
        text: ''
    }

    handleChangeText = text => {
        this.setState({ text })
    }

    render() {
        return (
            <View>
                <Entry 
                    text={this.state.text} 
                    callWhenChange={this.handleChangeText} 
                />
                <Text style={Padrao.fonte40}>{this.state.text}</Text>
            </View>
        )
    }
}
