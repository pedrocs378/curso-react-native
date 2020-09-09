import React from 'react'
import { Platform, ScrollView, View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { DrawerItems } from 'react-navigation-drawer'
import { Gravatar } from 'react-native-gravatar'
import AsyncStorage from '@react-native-community/async-storage'
import Icon from 'react-native-vector-icons/FontAwesome'
import axios from 'axios'

import commonStyles from '../commonStyles'

export default props => {

    const handleConvertName = () => {
        const name = props.navigation.getParam('name').split(' ')

        if (name.length > 2) {
            return name[0] + ' ' + name[1]
        } else {
            return props.navigation.getParam('name')
        }
    }

    const logout = () => {
        delete axios.defaults.headers.common['Authorization']
        AsyncStorage.removeItem('userData')
        props.navigation.navigate('AuthOrApp')
    }

    return (
        <ScrollView>
            <View style={styles.header}>
                <Text style={styles.title}>Tasks</Text>
                <TouchableOpacity onPress={logout}>
                    <View style={styles.logoutIcon}>
                        <Icon name="sign-out" size={30} color="#800" />
                    </View>
                </TouchableOpacity>

            </View>
            <View style={styles.userContainer}>
                <Gravatar 
                    style={styles.avatar} 
                    options={{ 
                        email: props.navigation.getParam('email'),
                        secure: true
                    }} 
                />
                <View style={styles.userInfo}>
                    <Text style={styles.name}>{handleConvertName()}</Text>
                    <Text style={styles.email}>{props.navigation.getParam('email')}</Text>
                </View>
            </View>
            <DrawerItems {...props} />
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    logoutIcon: {
        marginTop: 15,
        marginRight: 15
    },
    userContainer: {
        borderBottomWidth: 1,
        borderColor: '#bbb',
        flexDirection: 'row',
        alignItems: 'center'
    },
    title: {
        color: '#000',
        fontFamily: 'Roboto',
        fontSize: 30,
        paddingTop: Platform.OS === 'ios' ? 70 : 30,
        padding: 10
    },
    avatar: {
        width: 60,
        height: 60,
        borderRadius: 30,
        margin: 15,
    },
    userInfo: {
        marginLeft: 10
    },
    name: {
        fontFamily: commonStyles.fontFamily,
        fontSize: 20,
        marginBottom: 5,
        color: commonStyles.colors.mainText
    },
    email: {
        fontFamily: commonStyles.fontFamily,
        fontSize: 15,
        marginBottom: 10,
        color: commonStyles.colors.subText
    }
})