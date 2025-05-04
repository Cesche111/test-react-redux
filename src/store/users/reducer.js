import * as types from './actionTypes';

const initialState = {
    users: [],
    isLoading: false,
    activeUserId: null,
    searchName: '',
    hasErrored: false
};

const users = (state = initialState, action) => {
    switch (action.type) {
        case types.USERS_LOADING:
            return {...state, isLoading: true, hasErrored: false};
            
        case types.USERS_FETCHED:
            return {...state, users: action.payload, isLoading: false};
            
        case types.USERS_ERROR:
            return {...state, hasErrored: true, isLoading: false};
            
        case types.ACTIVE_USERS_ID:
            return {...state, activeUserId: action.payload};
            
        case types.SEARCH_BY_NAME:
            return {...state, searchName: action.payload};
            
        default:
            return state;
    }
};

export default users;