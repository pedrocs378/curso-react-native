import React, { Component } from 'react';
import { StyleSheet, View, Text, StatusBar, Alert } from 'react-native';

import MineField from './src/components/MineField'
import Header from './src/components/Header'
import LevelSelection from './src/screens/LevelSelection'

import { 
	createMinedBoard, 
	cloneBoard, 
	hasExplosion, 
	openField, 
	showMines, 
	wonGame, 
	invertFlag,
	flagsUsed
} from './src/logic'

import params from './src/params'

export default class App extends Component {

	constructor(props) {
		super(props)
		this.state = this.handleCreateState()
	}
  
	handleMinesAmount = () => {
		const cols = params.getColumnsAmount()
		const rows = params.getRowsAmount()

		return Math.ceil(cols * rows * params.difficultLevel)
	}

	handleCreateState = () => {
		const cols = params.getColumnsAmount()
		const rows = params.getRowsAmount()

		return {
			board: createMinedBoard(rows, cols, this.handleMinesAmount()),
			won: false,
			lost: false,
			showLevelSelection: false
		}
	}

	handleOnOpenField = (row, column) => {
		const board = cloneBoard(this.state.board)
		openField(board, row, column)

		const lost = hasExplosion(board)
		const won = wonGame(board)

		if (lost) {
			showMines(board)
			Alert.alert('Não foi dessa vez parça!', 'Tente de novo uma outra hora...')
		}

		if (won) {
			Alert.alert('Parabéns', 'Voce venceu!')
		}

		this.setState({ board, lost, won })

	}

	handleOnSelectField = (row, column) => {
		const board = cloneBoard(this.state.board)
		invertFlag(board, row, column)

		const won = wonGame(board)

		if(won) {
			Alert.alert('Parabéns', 'Voce venceu!')	
		}

		this.setState({ board, won })
	}

	handleOnLevelSelected = level => {
		params.difficultLevel = level
		this.setState(this.handleCreateState())
	}

	render() {
		return (
			<View style={styles.container}>
				<StatusBar barStyle={"dark-content"} backgroundColor={this.state.showLevelSelection ? 'rgba(0,0,0,0.6)' : '#eee'} />
				<LevelSelection 
					isVisible={this.state.showLevelSelection} 
					onLevelSelected={this.handleOnLevelSelected}
					onCancel={() => this.setState({ showLevelSelection: false })} 
				/>
				<Header 
					flagsLeft={this.handleMinesAmount() - flagsUsed(this.state.board)} 
					onNewGame={() => this.setState(this.handleCreateState())}	
					onFlagPress={() => this.setState({ showLevelSelection: true })}
				/>
				<View style={styles.board}>
					<MineField 
						board={this.state.board} 
						onOpenField={this.handleOnOpenField}
						onSelectField={this.handleOnSelectField}
					/>
				</View>
			</View>
		)
  	}
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'flex-end',
	},
	board: {
		alignItems: 'center',
		backgroundColor: '#aaa',
		flexWrap: 'wrap',
		flexDirection: 'row'
	},
	title: {
	}
});
