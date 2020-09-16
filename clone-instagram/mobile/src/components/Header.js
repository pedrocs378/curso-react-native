import React, { Component } from 'react'
import {
    StyleSheet,
    Text,
    View,
    Platform,
    Image
} from 'react-native'
import { connect } from 'react-redux'
import { Gravatar } from 'react-native-gravatar'

import icon from '../../assets/imgs/icon.png'
import Icon from 'react-native-vector-icons/FontAwesome'

class Header extends Component {
    render() {
        const name = this.props.name || 'Anonymous'
        const gravatar = this.props.email ?
            <Gravatar options={{ email: this.props.email, secure: true }} 
                style={styles.avatar}
            />
            : null

        return (
            <View style={styles.container}>
                <View style={styles.rowContainer}>
                    <Icon name="camera" size={22} style={{ marginTop: 5 }} color="#444" />
                    <Text style={styles.title}>Instagram</Text>
                </View>
                <View style={styles.userContainer}>
                    <Text style={styles.user}>{name}</Text>
                    {gravatar}
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        marginTop: Platform.OS === 'ios' ? 20 : 0,
        padding: 10,
        borderBottomWidth: 1,
        borderColor: '#bbb',
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    rowContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    image: {
        height: 30,
        width: 30,
        resizeMode: 'contain'
    },
    title: {
        color: '#444',
        fontFamily: 'shelter',
        height: 35,
        fontSize: 35,
        marginLeft: 10
    },
    userContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    user: {
        fontSize: 10,
        color: '#888'
    },
    avatar: {
        width: 30,
        height: 30,
        borderRadius: 15,
        marginLeft: 10
    }
})

const mapStateToProps = ({ user }) => {
    return {
        email: user.email,
        name: user.name
    }
}

export default connect(mapStateToProps)(Header)

// export default Header