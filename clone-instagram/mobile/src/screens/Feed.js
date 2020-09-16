import React, { Component } from 'react'
import { StyleSheet, View, FlatList } from 'react-native'
import { connect } from 'react-redux'

import Header from '../components/Header'
import Post from '../components/Post'

class Feed extends Component {
    state = {
        
    }

    render() {
        return (
            <View style={styles.container}>
                <Header />
                <FlatList 
                    data={this.props.posts}
                    keyExtractor={item => `${item.id}`}
                    renderItem={({ item }) => {
                        return (
                            <Post key={item.id} {...item} />
                        )
                    }}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fff"
    }
})

const mapStateToPros = ({ posts }) => {
    return {
        posts: posts.posts
    }
}

export default connect(mapStateToPros)(Feed)

// export default Feed