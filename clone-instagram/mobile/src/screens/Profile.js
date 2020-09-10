import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { Gravatar } from 'react-native-gravatar'

class Profile extends Component {
    logout = () => {
        console.log(this.props)
    }

    render() {
        const options = { email: 'pedrocs378@gmail.com', secure: true }

        return (
            <View style={styles.container}>
                <Gravatar options={options} style={styles.avatar} />
                <Text style={styles.nickname}>Pedro César</Text>
                <Text style={styles.email}>{options.email}</Text>
                <TouchableOpacity onPress={this.logout} style={styles.button}>
                    <Text style={styles.buttonText}>Sair</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },
    avatar: {
        width: 150,
        height: 150,
        borderRadius: 75,
        marginTop: 100
    },
    nickname: {
        marginTop: 30,
        fontSize: 30,
        fontWeight: 'bold'
    },
    email: {
        marginTop: 20,
        fontSize: 25
    },
    button: {
        width: 85,
        alignItems: 'center',
        marginTop: 30,
        padding: 10,
        backgroundColor: 'rgba(20, 20, 20, 0.3)',
        borderRadius: 8,
    },
    buttonText: {
        fontSize: 20,
        color: '#fff'
    }
})

export default Profile