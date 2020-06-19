import React from 'react'
import { ScrollView, View, FlatList, Text, StyleSheet } from 'react-native'

const students = [
    { id: 1, name: 'Joao', note: 7.9 },
    { id: 2, name: 'Ana', note: 9.1 },
    { id: 3, name: 'Bia', note: 5.4 },
    { id: 4, name: 'Pedro', note: 9.5 },
    { id: 5, name: 'Claudia', note: 7.6 },
    { id: 6, name: 'Roberto', note: 6.8 },
    { id: 7, name: 'Rafael', note: 9.9 },
    { id: 8, name: 'Guilherme', note: 10.0 },
    { id: 9, name: 'Rebeca', note: 8.8 },

    { id: 11, name: 'Joao', note: 7.9 },
    { id: 12, name: 'Ana', note: 9.1 },
    { id: 13, name: 'Bia', note: 5.4 },
    { id: 14, name: 'Pedro', note: 9.5 },
    { id: 15, name: 'Claudia', note: 7.6 },
    { id: 16, name: 'Roberto', note: 6.8 },
    { id: 17, name: 'Rafael', note: 9.9 },
    { id: 18, name: 'Guilherme', note: 10.0 },
    { id: 19, name: 'Rebeca', note: 8.8 },

    { id: 21, name: 'Joao', note: 7.9 },
    { id: 22, name: 'Ana', note: 9.1 },
    { id: 23, name: 'Bia', note: 5.4 },
    { id: 24, name: 'Pedro', note: 9.5 },
    { id: 25, name: 'Claudia', note: 7.6 },
    { id: 26, name: 'Roberto', note: 6.8 },
    { id: 27, name: 'Rafael', note: 9.9 },
    { id: 28, name: 'Guilherme', note: 10.0 },
    { id: 29, name: 'Rebeca', note: 8.8 },
    
]

const styleItem = {
    paddingHorizontal: 15,
    height: 70,
    backgroundColor: '#DDD',
    borderWidth: 0.5,
    borderColor: '#222',

    // Flex Box
    // justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around',
    
}

export const Student = props =>
    <View style={styleItem}>
        <Text>Nome: {props.name}</Text>
        <Text style={{fontWeight: 'bold'}}>Nota: {props.note}</Text>
    </View>

export default props => {
    const renderItem = ({ item }) => {
        return <Student {...item} />
    }

    return (
        <ScrollView>
            <FlatList 
                data={students}
                renderItem={renderItem} 
                keyExtractor={(_, index) => index.toString()} 
            />
        </ScrollView>
    )
}