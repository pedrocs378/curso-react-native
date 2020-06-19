import React from 'react'
import {
    StyleSheet,
    Text,
    Dimensions,
    TouchableHighlight,
} from 'react-native'


export default props => {
    const stylesButton = [styles.button]

    if (props.double) stylesButton.push(styles.buttomDouble)
    if (props.triple) stylesButton.push(styles.buttonTriple)
    if (props.operation) stylesButton.push(styles.operationButton)
    if (props.operation && props.equal) stylesButton.push(styles.buttonCircle)
    if (props.operation && props.double) stylesButton.push(styles.operationButton, styles.buttomDouble)
    
    return (
        <TouchableHighlight 
            activeOpacity={0.1} 
            style={{backgroundColor: '#000'}} 
            onPress={() => {props.onClick(props.label)}}

        >
            <Text style={stylesButton}>{props.label}</Text>
        </TouchableHighlight>
    )
}

const styles = StyleSheet.create({
    button: {
        fontSize: 40,
        height: Dimensions.get('window').width / 4,
        width: Dimensions.get('window').width / 4,
        padding: Dimensions.get('window').width / 16,
        color: '#fff',
        backgroundColor: '#000',
        textAlign: 'center'
    },

    operationButton: {
        color: '#fa8231',
    },

    buttomDouble: {
        width: (Dimensions.get('window').width / 4) * 2,

    },

    buttonTriple: {
        width: (Dimensions.get('window').width / 4) * 3
    }, 

    buttonCircle: {
        color: '#fff',
        borderWidth: 0,
        backgroundColor: '#fa8231',
        borderRadius: 100,
    }
})