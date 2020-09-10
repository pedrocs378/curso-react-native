import React, { useState } from 'react'
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    TextInput,
    Image,
    Dimensions,
    Platform,
    ScrollView,
    Alert
} from 'react-native'
import ImagePicker from 'react-native-image-picker'

const AddPhoto = () => {
    const [image, setImage] = useState({
        uri: null,
        base64: null
    })
    const [comment, setComment] = useState('')

    async function pickImage() {
        ImagePicker.showImagePicker({
            title: 'Tire uma foto ou escolha da galeria',
            maxHeight: 600,
            maxWidth: 800,
            cameraType: "front",
            chooseFromLibraryButtonTitle: "Escolher da galeria...",
            takePhotoButtonTitle: "Tirar foto com a câmera...",
            cancelButtonTitle: "Cancelar",
        }, res => {
            if (!res.didCancel) {
                setImage({ uri: res.uri, base64: res.data })
            }
        })
    }

    async function save() {
        Alert.alert('Imagem adicionada!', comment)
    }

    return (

        <ScrollView>
            <View style={styles.container}>
                <Text style={styles.title}>Compartilhe uma foto</Text>
                <View style={styles.imageContainer}>
                    <Image source={image} style={styles.image} />
                </View>
                <TouchableOpacity 
                    delayPressIn={0} 
                    activeOpacity={0.7}
                    onPress={pickImage} 
                    style={styles.button}
                > 
                    <Text style={styles.buttonText}>Escolha a foto</Text>
                </TouchableOpacity>
                <TextInput 
                    placeholder='Adicionar comentário...' 
                    multiline={true}
                    style={styles.input} 
                    value={comment} 
                    onChangeText={comment => setComment(comment)}
                />
                <TouchableOpacity 
                    delayPressIn={0} 
                    activeOpacity={0.7} 
                    onPress={save} 
                    style={styles.button} 
                >
                    <Text style={styles.buttonText}>Salvar</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
    
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        paddingHorizontal: 20
    },
    title: {
        fontSize: 20,
        marginTop: Platform.OS === 'ios' ? 30 : 10,
        fontWeight: 'bold'
    },
    imageContainer: {
        width: '90%',
        height: Dimensions.get('window').width * 3 / 4,
        backgroundColor: '#eee',
        marginTop: 10
    },
    image: {
        width: '100%',
        height: Dimensions.get('window').width * 3 / 4,
        resizeMode: 'center'
    },
    button: {
        marginTop: 30,
        width: '90%',
        padding: 10,
        borderRadius: 8,
        alignItems: 'center',
        backgroundColor: 'rgba(20, 20, 20, 0.3)'
    },
    buttonText: {
        fontSize: 20,
        color: '#fff'
    },
    input: {
        marginTop: 20,
        width: '90%',
        borderWidth: 1,
        borderRadius: 8,
        paddingLeft: 15
    }
})


export default AddPhoto