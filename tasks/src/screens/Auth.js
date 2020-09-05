import React, { Component } from 'react'
import { 
    ImageBackground, 
    Text, 
    StyleSheet, 
    View, 
    TouchableOpacity,
    Alert,
    StatusBar,
} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
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
            this.signin()
        }
    }

    signup = async () => {
        try {
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

    signin = async () => {
        try {
            const response = await axios.post(server + '/signin', {
                email: this.state.email,
                password: this.state.password   
            })

            axios.defaults.headers.common['Authorization'] = 'bearer ' + response.data.token
            this.props.navigation.navigate('Home')
        } catch(e) {
            showError(e)
        }
    }

    render() {

        const validations = []
        validations.push(this.state.email && this.state.email.includes('@'))
        validations.push(this.state.password && this.state.password.length >= 6)

        if (this.state.stageNew) {
            validations.push(this.state.name && this.state.name.trim().length >= 3)      
            validations.push(this.state.password === this.state.confirmPassword)   
        }

        const validForm = validations.reduce((total, current) => total && current)

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
                            style={styles.input}
                            icon="user"
                            focusable={this.state.stageNew ? true : false}
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
                        focusable={this.state.stageNew ? false : true}
                        value={this.state.email}
                        textContentType="emailAddress"
                        onChangeText={email => this.setState({ email })}
                    />
                    <AuthInput 
                        style={styles.input} 
                        icon="lock"
                        showIconPass
                        placeholder="Senha" 
                        value={this.state.password}
                        textContentType="password"
                        onChangeText={password => this.setState({ password })}
                    />
                    {
                        this.state.stageNew &&
                        <AuthInput
                            style={styles.input}
                            icon="asterisk"
                            showIconPass
                            placeholder="Confirme a senha"
                            value={this.state.confirmPassword}
                            textContentType="password"
                            onChangeText={confirmPassword => this.setState({ confirmPassword })}
                        />
                    }
                    <TouchableOpacity 
                        activeOpacity={0.7} 
                        onPress={this.handleSigninOrSignup}
                        disabled={!validForm}
                    >
                        <View style={[styles.button, validForm ? {} : { backgroundColor: '#AAA' }]}>
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
        fontFamily: commonStyles.fontTitle,
        color: '#080',
        fontSize: 100,
        fontWeight: 'bold',
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