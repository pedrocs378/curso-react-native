import React, { Component } from 'react'
import { StyleSheet, View, Text, TouchableOpacity, TextInput } from 'react-native'

class Register extends Component {
    state = {
        name: '',
        email: '',
        password: ''
    }

    render() {
        return (
            <View style={styles.container}>
                <TextInput 
                    style={styles.input}
                    placeholder="Nome" 
                    autoFocus={true}
                    value={this.state.name}
                    onChangeText={name => this.setState({ name })}
                />
                <TextInput 
                    style={styles.input}
                    placeholder="Email" 
                    autoCapitalize="none"
                    value={this.state.email}
                    keyboardType="email-address"
                    onChangeText={email => this.setState({ email })}
                />
                <TextInput 
                    style={styles.input}
                    placeholder="Senha" 
                    secureTextEntry={true}
                    value={this.state.password}
                    onChangeText={password => this.setState({ password })}
                />
                <TouchableOpacity onPress={() => {}} style={styles.button}>
                    <Text style={styles.buttonText}>Salvar</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    button: {
        width: '35%',
        alignItems: 'center',
        marginTop: 30,
        padding: 10,
        backgroundColor: 'rgba(20, 20, 20, 0.3)',
        borderRadius: 8,
    },
    buttonText: {
        fontSize: 20,
        color: 'white',
    },
    input: {
        marginTop: 20,
        width: '90%',
        backgroundColor: '#eee',
        borderWidth: 1,
        borderColor: '#333',
        borderRadius: 8,
        paddingHorizontal: 15,
    }
})

export default Register