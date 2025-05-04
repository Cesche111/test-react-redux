import * as types from './actionTypes';
import axios from 'axios';

export const fetchPosts = (url) => async (dispatch) => {
    dispatch({type: types.POSTS_LOADING});
    
    try {
        const {data} = await axios.get(url);
        dispatch({type: types.POSTS_FETCHED, payload: data});
    } catch (error) {
        dispatch({type: types.POSTS_ERROR});
        console.error("Posts fetch error:", error);
    }
};

export const searchByPost = (post) => (dispatch) => {
    dispatch({type: types.SEARCH_POST, payload: post});
};