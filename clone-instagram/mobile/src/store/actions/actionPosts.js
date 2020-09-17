import { ADD_POST, ADD_COMMENT } from './actionTypes'
import axios from 'axios'

export const addPost = post => {
    return dispatch => {
        axios({
            url: 'uploadImage',
            baseURL: 'http://localhost:5001/clone-instagram-ca684/us-central1/uploadImage',
            method: 'post',
            data: {
                image: post.image.base64
            }
        })
            .then(res => {
                post.image = res.data.imageUrl
                axios.post('/posts.json', { ...post })
                    .then(res => console.log(res.data))
                    .catch(err => console.log(err))
            })
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