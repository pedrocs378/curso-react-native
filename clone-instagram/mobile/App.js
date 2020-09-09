import React, { Component } from 'react';
import {
	StyleSheet,
	View,
	Text
} from 'react-native';

import Post from './src/components/Post'
import Header from './src/components/Header'

class App extends Component {
	render() {
		return (
			<View style={{ flex: 1 }}>
				<Header />
				<Post image={require('./assets/imgs/fence.jpg')} />
			</View>
		)
	}
}

const styles = StyleSheet.create({

});

export default App;
