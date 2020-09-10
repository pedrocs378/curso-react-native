import React, { Component } from 'react'
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    TextInput
} from 'react-native'

class Login extends Component {
    state = {
        email: '',
        password: ''
    }

    login = () => {
        this.props.navigation.navigate('Profile')
    }

    render() {
        return (
            <View style={styles.container}>
                <TextInput 
                    style={styles.input}
                    placeholder="Email" 
                    autoFocus={true} 
                    autoCapitalize="none"
                    keyboardType="email-address" 
                    value={this.state.email}
                    onChangeText={email => this.setState({ email })}
                />
                <TextInput 
                    style={styles.input}
                    placeholder="Senha" 
                    secureTextEntry={true} 
                    value={this.state.password}
                    onChangeText={password => this.setState({ password })}
                />
                <View style={styles.buttonsContainer}>
                    <TouchableOpacity onPress={() => { }} style={styles.button}>
                        <Text style={styles.buttonText}>Cadastrar</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={this.login} style={styles.button}>
                        <Text style={styles.buttonText}>Login</Text>
                    </TouchableOpacity>
                </View>
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
    buttonsContainer: {
        flexDirection: 'row',
        width: '90%',
        justifyContent: 'space-between'
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
        color: '#fff'
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

export default Login