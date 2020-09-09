import React, { Component } from 'react'
import { 
    View, 
    Text, 
    Alert,
    ImageBackground, 
    StyleSheet, 
    StatusBar, 
    FlatList, 
    TouchableOpacity, 
    Platform
} from 'react-native'
import AsyncStorage from '@react-native-community/async-storage'
import Icon from 'react-native-vector-icons/FontAwesome'
import axios from 'axios'
import moment from 'moment'

import 'moment/locale/pt-br'
import { server, showError } from '../common'
import commonStyles from '../commonStyles'

import todayImage from '../../assets/imgs/today.jpg'
import tomorrowImage from '../../assets/imgs/tomorrow.jpg'
import weekImage from '../../assets/imgs/week.jpg'
import monthImage from '../../assets/imgs/month.jpg'

import Task from '../components/Task'
import AddTask from './AddTask'

const initialState = { 
    showDoneTasks: true,
    showAddTask: false,
    visibleTasks: [],
    tasks: [] 
}

export default class TaskList extends Component {
    state = {
        ...initialState
    }

    componentDidMount = async () => {
        const stateString = await AsyncStorage.getItem('stateTasks')
        const stateParsed = JSON.parse(stateString) || initialState

        this.setState({
            showDoneTasks: stateParsed.showDoneTasks
        }, this.handleFilterTasks)

        this.handleLoadTasks()
    }

    handleLoadTasks = async () => {
        try {
            const maxDate = moment()
                .add({ days: this.props.daysAhead })
                .format('YYYY-MM-DDT23:59:59.000Z')
            const res = await axios.get(`${server}/tasks?date=${maxDate}`)
            this.setState({ tasks: res.data }, this.handleFilterTasks)
        } catch(e) {
            showError(e)
        }
    }

    handleToggleFilter = () => {
        this.setState({ showDoneTasks: !this.state.showDoneTasks }, this.handleFilterTasks)
    }

    handleFilterTasks = () => {
        let visibleTasks = null

        if(this.state.showDoneTasks) {
            visibleTasks = [...this.state.tasks]
        } else {
            const pending = task => task.doneAt === null

            visibleTasks = this.state.tasks.filter(pending)
        }

        this.setState({ visibleTasks })
        AsyncStorage.setItem('stateTasks', JSON.stringify({
            showDoneTasks: this.state.showDoneTasks
        }))
    }

    handleToggleTask = async taskId => {
        try {
            await axios.put(server+ '/tasks/' +taskId+ '/toggle')
            this.handleLoadTasks()
        } catch(e) {
            showError(e)
        }
    }

    handleAddTask = async newTask => {
        if (!newTask.desc || !newTask.desc.trim()) {
            Alert.alert('Dados inválidos', 'Descrição não informada!')
            return
        }

        try {
            await axios.post(server+ '/tasks', {
                desc: newTask.desc,
                estimateAt: newTask.date
            })

            this.setState({ showAddTask: false }, this.handleLoadTasks)
        } catch(e) {
            showError(e)
        }
        
    }

    handleDeleteTask = async taskId => {
        try {
            await axios.delete(server+ '/tasks/' +taskId)
            this.handleLoadTasks()
        } catch(e) {
            showError(e)
        }
    }

    handleGetImage = () => {
        switch (this.props.daysAhead) {
            case 0: return todayImage
            case 1: return tomorrowImage
            case 7: return weekImage
            default: return monthImage
        }
    }

    handleGetColor = () => {
        switch (this.props.daysAhead) {
            case 0: return commonStyles.colors.today
            case 1: return commonStyles.colors.tomorrow
            case 7: return commonStyles.colors.week
            default: return commonStyles.colors.month
        }
    }
    
    render() {
        const today = moment().locale('pt-br').format('ddd, D [de] MMMM')

        return (
            <View style={styles.container}>
                <StatusBar backgroundColor="black" />
                <AddTask 
                    isVisible={this.state.showAddTask} 
                    onSave={this.handleAddTask}
                    onCancel={() => this.setState({ showAddTask: false })} 
                />
                <ImageBackground style={styles.background} source={this.handleGetImage()}>
                    <View style={styles.iconBar}>
                        <TouchableOpacity onPress={() => this.props.navigation.openDrawer()}>
                            <Icon 
                                name="bars"
                                size={25}
                                color={commonStyles.colors.secondary}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={this.handleToggleFilter}>
                            <Icon 
                                name={ this.state.showDoneTasks ? 'eye' : 'eye-slash' }
                                size={20}
                                color={commonStyles.colors.secondary}
                            />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.titleBar}>
                        <Text style={styles.title}>{this.props.title}</Text>
                        <Text style={styles.subtitle}>{today}</Text>
                    </View>
                </ImageBackground>
                <View style={styles.taskList}>
                    <FlatList 
                        data={this.state.visibleTasks} 
                        keyExtractor={item => String(item.id)} 
                        renderItem={({ item }) => <Task {...item} 
                            onToggleTask={this.handleToggleTask} 
                            onDelete={this.handleDeleteTask} 
                        />}
                    />   
                </View>
                <TouchableOpacity 
                    style={[styles.addButton, { backgroundColor: this.handleGetColor() }]}
                    activeOpacity={0.6}
                    onPress={() => this.setState({ showAddTask: true })}
                >
                    <Icon name="plus" size={30} color={commonStyles.colors.secondary} />
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    background: {
        flex: 3
    },
    taskList: {
        flex: 7
    },
    titleBar: {
        flex: 1,
        justifyContent: 'flex-end'
    },
    title: {
        fontFamily: commonStyles.fontFamily,
        color: commonStyles.colors.secondary,
        fontSize: 50,
        marginLeft: 20,
        marginBottom: 20
    },
    subtitle: {
        fontFamily: commonStyles.fontFamily,
        color: commonStyles.colors.secondary,
        fontSize: 20,
        marginLeft: 20,
        marginBottom: 30
    },
    iconBar: {
        flexDirection: 'row',
        marginHorizontal: 20,
        marginTop: Platform.OS === 'ios' ? 40 : StatusBar.length + 15,
        justifyContent: 'space-between'
    },
    addButton: {
        position: "absolute",
        right: 30,
        bottom: 30,
        width: 70,
        height: 70,
        borderRadius: 35,
        alignItems: 'center',
        justifyContent: 'center',
    }
})