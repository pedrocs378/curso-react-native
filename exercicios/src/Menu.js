import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { NavigationContainer } from '@react-navigation/native'
import { View } from 'react-native'

import Simples from './components/Simple'
import ParImpar from './components/ParImpar'
import { Inverter, MegaSena } from './components/Multi'
import Contador from './components/Contador'
import Plataformas from './components/Plataformas'
import ValidateProps from './components/ValidarProps'
import Evento from './components/Evento'
import GrandFather from './components/ComunicacaoDireta'
import TextSynced from './components/ComunicacaoIndireta'
import ListaFlex from './components/ListaFlex'
import Flex from './components/Flex'

function GoToMegaSena() {
    return (
        <MegaSena numbers={8} />
    )
}
function GoToInverter() {
    return (
        <Inverter text='Pedro Cesar Vagner!' />
    )
}
function GoToParImpar() {
    return (
        <ParImpar number={7} />
    )
}
function GoToSimples() {
    return (
        <Simples text='Flexivel!!' />
    )
}
function GoToContador() {
    return (
        <Contador initialNumber={100} />
    )
}
function GoToValidateProps() {
    return (
        <ValidateProps label="Year: " year={20} />
    )
}
function GoToGrandFather() {
    return (
        <GrandFather name='Martins' lastname='Nogueira' />
    )
}
function GoToFlexList() {
    return (
        <ListaFlex />
    )
}

const Drawer = createDrawerNavigator()

export default function Menu() {
    return (
        <NavigationContainer>
            <Drawer.Navigator 
                initialRouteName="Menu"                
                minSwipeDistance={300}
                drawerStyle={{width: 300, backgroundColor: '#c6cbef', borderRadius: 15}}
                drawerContentOptions={{
                    activeTintColor: 'purple',
                    itemStyle: { borderRadius: 15 }
                }}          
            >
                <Drawer.Screen name="Flex" component={Flex} />
                <Drawer.Screen name="Lista (Flex Box)" component={GoToFlexList} />
                <Drawer.Screen name="Texto Sincronizado" component={TextSynced} />
                <Drawer.Screen name="Avô" component={GoToGrandFather} />
                <Drawer.Screen name="Evento" component={Evento} />
                <Drawer.Screen name="Validar Props" component={GoToValidateProps} />
                <Drawer.Screen name="Plataformas" component={Plataformas} />
                <Drawer.Screen name="Contador" component={GoToContador} />
                <Drawer.Screen name="Mega-Sena" component={GoToMegaSena} />
                <Drawer.Screen name="Inverter" component={GoToInverter} />
                <Drawer.Screen name="Par Impar" component={GoToParImpar} />
                <Drawer.Screen name="Simples" component={GoToSimples} />
            </Drawer.Navigator>
        </NavigationContainer>
    )
}