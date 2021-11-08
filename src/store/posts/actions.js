import * as types from './actionTypes';
import axios from 'axios';

export const fetchPosts = (url) => async (dispatch) => {

    dispatch({
        type: types.POSTS_LOADING,
    });

    await axios.get(url)
        .then(({data}) => {
            dispatch({
                type: types.POSTS_FETCHED,
                payload: data,
            });
        })
        .catch((error) => {
            if (error.response) {
                console.log(error.response.data);
                console.log(error.response.status);
            }
        });
}

export const searchByPost = (post) => (dispatch) => {
    dispatch({
        type: types.SEARCH_POST,
        payload: post,
    });
}