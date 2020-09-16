import { ADD_POST, ADD_COMMENT } from './actionTypes'
import axios from 'axios'

export const addPost = post => {
    return dispatch => {
        axios.post('/posts.json', { ...post })
            .then(res => console.log(res.data))
            .catch(err => console.log(err))
    }

    // return {
    //     type: ADD_POST,
    //     payload: post
    // }
}

export const addComment = payload => {
    return {
        type: ADD_COMMENT,
        payload
    }
}