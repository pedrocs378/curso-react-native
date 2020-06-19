import React, { Component, useState } from 'react'
import { View, Text, TouchableHighlight } from 'react-native'

export default class Contador extends Component {

    state = {
        number: this.props.initialNumber
    }

    handleIncrement = () => {
        this.setState({ number: this.state.number + 1 })
    }

    handleClear = () => {
        this.setState({ number: this.props.initialNumber })
    }

    render() {
        return (
            <View>
                <Text style={{fontSize: 60, padding: 10}}>{this.state.number}</Text>
                <TouchableHighlight
                    onPress={this.handleIncrement}
                    onLongPress={this.handleClear}
                    underlayColor='white'                  
                >
                    <Text>Incrementar/Zerar</Text>
                </TouchableHighlight>
            </View>
        )
    }
}