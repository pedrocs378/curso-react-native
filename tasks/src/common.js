import { Alert } from 'react-native'

const server = 'http://192.168.0.119:3000'

function showError(err) {
    if(err.response && err.response.data) {
        Alert.alert('Ops, ocorreu um problema!', err.response.data)
    } else {
        Alert.alert('Ops, ocorreu um problema!', 'Mensagem: ' + err) 
    }
}

function showSuccess(msg) {
    Alert.alert('Sucesso!', msg)
}

export { server, showError, showSuccess }