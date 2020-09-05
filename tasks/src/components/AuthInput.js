import React, { useState, useEffect } from 'react'
import { View, TextInput, TouchableOpacity, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'

export default (props) => {
    const [showPassword, setShowPassword] = useState(true)

    return (
        <View style={[styles.container, props.style]}>
            <Icon name={props.icon} size={20} style={styles.icon} />
            <TextInput {...props} 
                style={styles.input} 
                secureTextEntry={props.showIconPass ? showPassword : false}
            />
            {
                props.showIconPass ? 
                    <TouchableOpacity 
                        style={styles.passIconContainer} 
                        onPress={() => setShowPassword(!showPassword)}
                        activeOpacity={0.6}
                    >
                        <Icon style={styles.passIcon} name={showPassword ? "eye" : "eye-slash"} size={18} color="#333" />
                    </TouchableOpacity>
                    : null
            }
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 50,
        backgroundColor: '#EEE',
        borderRadius: 20,
        flexDirection: "row",
        alignItems: 'center',
    },
    icon: {
        color: '#333',
        marginLeft: 20
    },
    input: {
        marginLeft: 20,
        width: '70%'
    },
    passIconContainer: {
        flex: 1,
        alignItems: 'flex-end',
        marginRight: 20
    },
    passIcon: {

    }
})