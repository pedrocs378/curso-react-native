import React, { Component } from 'react'
import { 
    ImageBackground, 
    Text, 
    StyleSheet, 
    View, 
    TouchableOpacity,
    Alert,
    StatusBar
} from 'react-native'
import axios from 'axios'

import AuthInput from '../components/AuthInput'

import loginImg from '../../assets/imgs/login.jpg'
import commonStyles from '../commonStyles'
import { server, showError, showSuccess } from '../common'

const initialState = {
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    stageNew: false
}

export default class Auth extends Component {

    state = {
        ...initialState
    }

    handleSigninOrSignup = () => {
        if (this.state.stageNew) {
            this.signup()
        } else {
            Alert.alert('Sucesso!', 'Logar')
        }
    }

    signup = async () => {
        try {
            console.log('...inserindo')
            await axios.post(server + '/signup', {
                name: this.state.name,
                email: this.state.email,
                password: this.state.password,
                confirmPassword: this.state.confirmPassword,   
            })

            showSuccess('Usuário cadastrado!')
            this.setState({ ...initialState })
        } catch(e) {
            showError(e)
        }
    }

    render() {
        return (
            <ImageBackground style={styles.background} source={loginImg}>
                <StatusBar backgroundColor="#010A05"  />
                <Text style={styles.title}>Tasks</Text>

                <View style={styles.formContainer}>
                    <Text style={styles.subtitle}>
                        {
                            this.state.stageNew ? 'Crie a sua conta' : 'Informe seus dados'
                        }
                    </Text>
                    {
                        this.state.stageNew &&
                        <AuthInput
                            icon="user"
                            style={styles.input}
                            placeholder="Nome"
                            value={this.state.name}
                            textContentType="name"
                            onChangeText={name => this.setState({ name })}
                        />
                    }
                    <AuthInput
                        icon="at" 
                        style={styles.input} 
                        placeholder="Email" 
                        value={this.state.email}
                        textContentType="emailAddress"
                        onChangeText={email => this.setState({ email })}
                    />
                    <AuthInput 
                        icon="lock"
                        style={styles.input} 
                        placeholder="Senha" 
                        value={this.state.password}
                        textContentType="password"
                        secureTextEntry={true}
                        onChangeText={password => this.setState({ password })}
                    />
                    {
                        this.state.stageNew &&
                        <AuthInput
                            icon="asterisk"
                            style={styles.input}
                            placeholder="Confirme a senha"
                            value={this.state.confirmPassword}
                            textContentType="password"
                            secureTextEntry={true}
                            onChangeText={confirmPassword => this.setState({ confirmPassword })}
                        />
                    }
                    <TouchableOpacity activeOpacity={0.7} onPress={this.handleSigninOrSignup}>
                        <View style={styles.button}>
                            <Text style={styles.buttonText}>
                                {
                                    this.state.stageNew ? 'Registrar' : 'Entrar'
                                }   
                            </Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity 
                    style={{ padding: 5 }} 
                    onPress={() => this.setState({ stageNew: !this.state.stageNew })}
                >
                    <Text style={styles.buttonText}>
                        {this.state.stageNew ? 'Já possui conta?' : 'Ainda não possui conta?'}
                    </Text>            
                </TouchableOpacity>
            </ImageBackground>
        )
    }
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
        fontFamily: commonStyles.fontFamily,
        color: commonStyles.colors.secondary,
        fontSize: 70,
        marginBottom: 10
    },
    subtitle: {
        fontFamily: commonStyles.fontFamily,
        color: 'white',
        fontSize: 25,
        textAlign: 'center',
        marginBottom: 10
    },
    formContainer: {
        padding: 20,
        width: '90%'
    },
    input: {
        marginTop: 10,
        backgroundColor: 'white',
    },
    button: {
        backgroundColor: '#080',
        marginTop: 10,
        padding: 12,
        alignItems: 'center',
        borderRadius: 10,     
    },
    buttonText: {
        fontFamily: commonStyles.fontFamily,
        color: commonStyles.colors.secondary,
        fontSize: 20,
    }
})