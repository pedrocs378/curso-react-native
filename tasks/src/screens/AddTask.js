import React, { Component } from 'react';
import {
    Modal, 
    View, 
    Text, 
    TextInput, 
    StyleSheet, 
    TouchableWithoutFeedback, 
    TouchableOpacity 
} from 'react-native';

import commonStyles from '../commonStyles'

const initialState = { desc: '' }

export default class AddTask extends Component {
    
    state = {
        ...initialState
    }

    render() {
        return (
            <Modal 
                transparent={true} 
                visible={this.props.isVisible} 
                onRequestClose={this.props.onCancel}
                animationType='slide'
            >
                <TouchableWithoutFeedback onPress={this.props.onCancel}>
                    <View style={styles.background} />
                </TouchableWithoutFeedback>
                <View style={styles.container}>
                    <Text style={styles.header}>Nova tarefa</Text>
                    <TextInput 
                        style={styles.input} 
                        placeholder="Informe a descrição" 
                        value={this.state.desc} 
                        onChangeText={desc => this.setState({ desc })}
                    />
                    <View style={styles.buttons}>
                        <TouchableOpacity style={styles.button} onPress={this.props.onCancel}>
                            <Text style={styles.textButton}>Cancelar</Text>
                        </TouchableOpacity>  
                        <TouchableOpacity style={styles.button}>
                            <Text style={styles.textButton}>Salvar</Text>
                        </TouchableOpacity>  
                    </View>
                </View>
                <TouchableWithoutFeedback onPress={this.props.onCancel}>
                    <View style={styles.background} />
                </TouchableWithoutFeedback>
            </Modal>
        )
    }
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    container: {
        backgroundColor: 'white'
    },
    header: {
        fontFamily: commonStyles.fontFamily,
        backgroundColor: commonStyles.colors.today,
        color: commonStyles.colors.secondary,
        textAlign: 'center',
        padding: 15,
        fontSize: 18
    },
    buttons: {
        flexDirection: 'row',
        justifyContent: 'flex-end'
    },
    input: {
        fontFamily: commonStyles.fontFamily,
        height: 40,
        margin: 15,
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: '#e3e3e3',
        borderRadius: 6,
        paddingLeft: 10
    },
    button: {
        width: 100,
        alignItems: 'center',
        marginRight: 20,
        marginVertical: 10,
        backgroundColor: commonStyles.colors.today,
        padding: 15,
        borderRadius: 10
    },
    textButton: {
        color: commonStyles.colors.secondary
    }
});