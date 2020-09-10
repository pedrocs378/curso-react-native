import React, { Component } from 'react'
import {
    StyleSheet,
    Text,
    View,
    Platform,
    Image
} from 'react-native'

import icon from '../../assets/imgs/icon.png'
import Icon from 'react-native-vector-icons/FontAwesome'

class Header extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.rowContainer}>
                    <Icon name="camera" size={22} style={{ marginTop: 5 }} color="#444" />
                    <Text style={styles.title}>Instagram</Text>
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
        width: '100%'
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
    }
})

export default Header