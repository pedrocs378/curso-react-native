import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createSwitchNavigator } from 'react-navigation'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import Login from '../screens/Login'
import Profile from '../screens/Profile'
import Feed from '../screens/Feed'
import AddPhoto from '../screens/AddPhoto'
import AuthNavigator from './AuthNavigator'

const { Navigator, Screen } = createBottomTabNavigator()

const LoginOrProfile = createSwitchNavigator({
    Profile: Profile,
    Auth: Login
}, {
    initialRouteName: 'Profile'
})

export default props => (
    <NavigationContainer>
        <Navigator 
            tabBarOptions={{
                initialRouteName: 'Feed',
                showLabel: false,
                inactiveBackgroundColor: '#fafafc',
                inactiveTintColor: '#c1bccc',
                activeBackgroundColor: '#ebebeb',
                activeTintColor: '#32264d'
            }} 
        >
            <Screen 
                name="Feed" 
                component={Feed} 
                options={{
                    tabBarIcon: ({ color, focused }) =>
                        <Icon name='home' size={25} color={color} />

                }} 
            />
            <Screen 
                name="AddPhoto" 
                component={AddPhoto} 
                options={{
                    tabBarIcon: ({ color }) =>
                        <Icon name='camera' size={22} color={color} />
                }} 
            />
            <Screen
                name="LoginOrProfile"
                component={AuthNavigator}
                options={{
                    tabBarIcon: ({ color, size }) => {
                        return (
                            <Icon name='user' size={size} color={color} />
                        )
                    }
                }}
            />
        </Navigator>
    </NavigationContainer>
)
