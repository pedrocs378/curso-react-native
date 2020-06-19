import React , { Component } from 'react'
import { View, StyleSheet } from 'react-native'

import Simples from './components/Simple'
import ParImpar from './components/ParImpar'
import { Inverter, MegaSena } from './components/Multi'

export default class App extends Component {
  render() {
	  return (
		  <View style={styles.container}>
			  <Simples text='TESTANDO' />
			  <ParImpar number={3} />
			  <Inverter text='Pedro Cesar Vagner Nogueira' />
			  <MegaSena numbers={10} />
		  </View>
	  )
  }
}

const styles = StyleSheet.create ({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	}
})