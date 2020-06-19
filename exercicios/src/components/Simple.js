import React from 'react'
import { Text } from 'react-native'
import Padrao from '../style/Padrao'

// export default (props) => {
//     return <Text>{props.text}</Text>
// }
export default props => 
    <Text style={Padrao.ex}>Arrow: {props.text}</Text>

