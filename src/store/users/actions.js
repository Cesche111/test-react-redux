import * as types from './actionTypes';
import axios from 'axios';

export const  fetchUsers = (url) => async (dispatch) => {

    dispatch({
        type: types.USERS_LOADING,
    });

    await axios.get(url)
        .then(({data}) => {
            dispatch({
                type: types.USERS_FETCHED,
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

export const setActiveUser = (id) =>  (dispatch) => {
    dispatch({
        type: types.ACTIVE_USERS_ID,
        payload: id,
    });
}

export const searchByName = (name) =>  (dispatch) => {
    dispatch({
        type: types.SEARCH_BY_NAME,
        payload: name,
    });
}

