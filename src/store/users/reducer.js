const initialState = {
    users: [],
    isLoading: false,
    activeUserId: null,
    searchName: '',
};

const users = (state = initialState, action) => {
    switch (action.type) {
        case 'USERS_FETCHED':
            return {
                ...state,
                users: action.payload,
                isLoading: !state.isLoading
            };

        case 'USERS_LOADING':
            return {
                ...state,
                isLoading: !state.isLoading
            };

        case 'ACTIVE_USERS_ID':
            return {
                ...state,
                activeUserId: action.payload
            };

        case 'SEARCH_BY_NAME':
            return {
                ...state,
                searchName: action.payload
            };

        default:
            return state;
    }
};

export default users;