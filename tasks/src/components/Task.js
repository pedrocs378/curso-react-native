import React, { useState } from 'react'
import { 
    View, 
    Text, 
    StyleSheet, 
    TouchableWithoutFeedback, 
    TouchableOpacity 
} from 'react-native'
import Swipeable from 'react-native-gesture-handler/Swipeable'
import Icon from 'react-native-vector-icons/FontAwesome'

import moment from 'moment'
import 'moment/locale/pt-br'

import commonStyles from '../commonStyles'

function handleGetCheckView(doneAt) {
    if(doneAt != null) {
        return (
            <View style={styles.done}>
                <Icon name='check' size={15} color='#fff'>

                </Icon>
            </View>
        )
        
    } else {
        return (
            <View style={styles.pending} />
        )
    }
}

export default props => {
    const [showLeft, setShowLeft] = useState(true)
    const [showRight, setShowRight] = useState(true)

    const doneOrNotStyle = props.doneAt != null ? { textDecorationLine: 'line-through' } : {}

    const date = props.doneAt ? props.doneAt : props.estimateAt
    const formattedDate = moment(date).locale('pt-br').format('ddd, D [de] MMMM')

    const getRightContent = () => {
        return (
            <TouchableOpacity 
                style={styles.right} 
                onPress={() => props.onDelete && props.onDelete(props.id)}
            >
                <Icon name="trash" size={30} color='white' />
            </TouchableOpacity>
        )
    }

    const getLeftContent = () => {
        return (
            <View style={styles.left}>
                <Icon name="trash" size={20} color='white' style={styles.excludeIcon} />
                <Text style={styles.excludeText}>Excluir</Text>
            </View>
        )
    }

    return (
        <View style={styles.content}>
            <Swipeable 
                renderLeftActions={getLeftContent} 
                renderRightActions={getRightContent}
                onSwipeableLeftOpen={() => props.onDelete && props.onDelete(props.id)}
            >
                <View style={styles.container}>
                    <TouchableWithoutFeedback onPress={() => props.onToggleTask(props.id)}>
                        <View style={styles.checkConteiner}>
                            {handleGetCheckView(props.doneAt)}
                        </View>
                    </TouchableWithoutFeedback>
                    <View style={styles.descContainer}>
                        <Text style={[styles.desc, doneOrNotStyle]}>{props.desc}</Text>
                        <Text style={styles.date}>{formattedDate}</Text>
                    </View>
                </View>
            </Swipeable>
        </View>
    )
}

const styles = StyleSheet.create({
    content: {
        borderColor: '#AAA',
        borderWidth: 1,
        borderRadius: 10,
        marginTop: 5,
        marginHorizontal: 10,
        backgroundColor: 'white',
    },
    container: {
        flexDirection: 'row',  
        alignItems: 'center',
        paddingVertical: 18
    },
    checkConteiner: {
        width: "20%",
        alignItems: 'center',
        justifyContent: 'center'
    },
    pending: {
        height: 25,
        width: 25,
        borderRadius: 13,
        borderWidth: 1,
        borderColor: '#555',
    },
    done: {
        height: 25,
        width: 25,
        borderRadius: 13,
        backgroundColor: '#4D7031',
        alignItems: 'center',
        justifyContent: 'center'
    },
    desc: {
        fontFamily: commonStyles.fontFamily,
        color: commonStyles.colors.mainText,
        fontSize: 15
    },
    date: {
        fontFamily: commonStyles.fontFamily,
        color: commonStyles.colors.subText,
        fontSize: 12
    },
    right: {
        backgroundColor: 'red',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
        paddingHorizontal: 25,
        borderRadius: 10,
    },
    left: {
        flex: 1,
        backgroundColor: 'red',
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 10,
    },
    excludeText: {
        fontFamily: commonStyles.fontFamily,
        color: 'white',
        fontSize: 15,
        margin: 10
    },
    excludeIcon: {
        marginLeft: 10
    }
})