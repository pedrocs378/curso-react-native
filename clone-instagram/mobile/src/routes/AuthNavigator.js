import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import Login from '../screens/Login'
import Profile from '../screens/Profile'
import Register from '../screens/Register'

const { Navigator, Screen } = createStackNavigator()

function AuthNavigator() {
    return (
        <Navigator
            initialRouteName='Login'
            screenOptions={{
                headerShown: false 
            }}
        >
            <Screen
                name="Profile"
                component={Profile}
            />
            <Screen
                name="Login"
                component={Login}
            />
            <Screen
                name="Register"
                component={Register}
                options={{
                    title: "Cadastrar",
                    headerShown: true,
                    headerStyle: {
                        backgroundColor: '#eee'
                    }
                }}
            />
        </Navigator>
    )
}

export default AuthNavigator