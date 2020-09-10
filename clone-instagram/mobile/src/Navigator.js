import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome'
import { NavigationContainer } from '@react-navigation/native'
import { createSwitchNavigator } from 'react-navigation'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Gravatar } from 'react-native-gravatar'

import Login from './screens/Login'
import Feed from './screens/Feed'
import AddPhoto from './screens/AddPhoto'
import Profile from './screens/Profile'

const Tab = createBottomTabNavigator()
const LoginOrProfile = createSwitchNavigator({
    Profile: Profile,
    Auth: Login
}, {
    initialRouteName: 'Profile'
})

export default props => (
    <NavigationContainer>
        <Tab.Navigator 
            tabBarOptions={{
                initialRouteName: 'Feed',
                showLabel: false,
            }} 
        >
            <Tab.Screen 
                name="Feed" 
                component={Feed} 
                options={{
                    tabBarIcon: ({ color, size }) =>
                        <Icon name='home' size={size} color={color} />

                }} 
            />
            <Tab.Screen 
                name="AddPhoto" 
                component={AddPhoto} 
                options={{
                    tabBarIcon: ({ color, size }) =>
                        <Icon name='camera' size={size} color={color} />
                }} 
            />
            <Tab.Screen 
                name="Profile" 
                component={Login} 
                options={{
                    tabBarIcon: () =>
                        <Gravatar 
                            options={{ email: 'pedrocs378@gmail.com', secure: true }} 
                            style={{ width: 30, height: 30, borderRadius: 15 }}
                        />
                }} 
            />
        </Tab.Navigator>
    </NavigationContainer>
)
