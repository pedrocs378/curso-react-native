import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';

import Button from './src/components/Button'
import Display from './src/components/Display'

const initialState = {
	displayValue: '0',
	clearDisplay: false,
	operation: null,
	values: [0, 0],
	current: 0
}

export default class App extends Component {
	
	state = { ...initialState }

	handleAddDigit = num => {

		const clearDisplay = this.state.displayValue === '0' || this.state.clearDisplay

		if (num === '.' && !clearDisplay && this.state.displayValue.includes('.')) {
			return
		}

		const currentValue = clearDisplay ? '' : this.state.displayValue
		const displayValue = currentValue + num

		this.setState({ displayValue, clearDisplay: false })

		if (num !== '.') {
			const newValue = parseFloat(displayValue)
			const values = [...this.state.values]

			values[this.state.current] = newValue

			this.setState({ values })
		}
	}

	handleClearMemory = () => {
		this.setState({ ...initialState })
	}

	handleSetOperation = operation => {
		if (this.state.current === 0) {
			this.setState({ operation, current: 1, clearDisplay: true })
		} else {
			const equals = operation === '='
			const values = [...this.state.values]
			try {
				values[0] = eval(values[0] + ' ' + this.state.operation + ' ' + values[1])
			} catch (e) {
				values[0] = this.state.values[0]
			}

			values[1] = 0
			this.setState({
				displayValue: `${values[0]}`,
				operation: equals ? null : operation,
				current: equals ? 0 : 1,
				clearDisplay: !equals,
				values,
			})
		}
	}

	render() {
		return (
			<View style={styles.container}>
				<Display value={this.state.displayValue} />
				<View style={styles.paddingSeparator}>
					<View style={styles.separator} />
				</View>
				<View style={styles.buttons}>
					<Button label="AC" double operation onClick={this.handleClearMemory} />
					<Button label="%" operation />
					<Button label="/" operation onClick={this.handleSetOperation} />
					<Button label="7" onClick={this.handleAddDigit} />
					<Button label="8" onClick={this.handleAddDigit} />
					<Button label="9" onClick={this.handleAddDigit} />
					<Button label="*" operation onClick={this.handleSetOperation} />
					<Button label="4" onClick={this.handleAddDigit} />
					<Button label="5" onClick={this.handleAddDigit} />
					<Button label="6" onClick={this.handleAddDigit} />
					<Button label="-" operation onClick={this.handleSetOperation} />
					<Button label="1" onClick={this.handleAddDigit} />
					<Button label="2" onClick={this.handleAddDigit} />
					<Button label="3" onClick={this.handleAddDigit} />
					<Button label="+" operation onClick={this.handleSetOperation} />
					<Button label="0" double onClick={this.handleAddDigit} />
					<Button label="." onClick={this.handleAddDigit} />
					<Button label="=" operation equal onClick={this.handleSetOperation} />
				</View>
			</View>
		)
	}
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},

	buttons: {
		flexDirection: 'row',
		flexWrap: 'wrap'
	},

	separator: {
		borderWidth: 0.23,
		borderColor: 'gray',
	},

	paddingSeparator: {
		paddingHorizontal: 25,
		backgroundColor: '#000'
	}

});