import * as types from './actionTypes';
import axios from 'axios';

export const fetchUsers = (url) => async (dispatch) => {
    dispatch({type: types.USERS_LOADING});
    
    try {
        const {data} = await axios.get(url);
        dispatch({type: types.USERS_FETCHED, payload: data});
    } catch (error) {
        dispatch({type: types.USERS_ERROR});
        console.error("Users fetch error:", error);
    }
};

export const setActiveUser = (id) => (dispatch) => {
    dispatch({type: types.ACTIVE_USERS_ID, payload: id});
};

export const searchByName = (name) => (dispatch) => {
    dispatch({type: types.SEARCH_BY_NAME, payload: name});
};