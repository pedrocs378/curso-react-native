import React from 'react'
import { View, Text } from 'react-native'

import Padrao from '../style/Padrao'

const fonte = { style: { fontSize: 30 } }

function childrensWithProps(props) {
    return React.Children.map(props.children, 
        c => React.cloneElement(c, { ...props, ...c.props }))
}

export const Child = props => 
    <View>
        <Text {...fonte}>       Filho: {props.name} {props.lastname}</Text>
    </View>

export const Father = props =>
    <View>
        <Text {...fonte}>   Pai: {props.name} {props.lastname}</Text>
        {/* {props.children} */}
        {childrensWithProps(props)}
    </View>

export const GrandFather = props =>
    <View style={Padrao.view}>
        <Text {...fonte}>Avô: {props.name} {props.lastname}</Text>
        <Father name='Paulo' lastname={props.lastname}>
            <Child name='Pedro' />
            <Child name='Vitor' />
            <Child name='Bruno' />
        </Father>
        <Father {...props} name='José'>
            <Child name='Rebeca' />
            <Child name='Renato' />
        </Father>
    </View>

export default GrandFather