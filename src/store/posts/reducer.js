const initialState = {
    posts: [],
    isPostsLoading: false,
    searchPost: '',
};

const posts = (state = initialState, action) => {
    switch (action.type) {
        case 'POSTS_FETCHED':
            return {
                ...state,
                posts: action.payload,
                isPostsLoading: !state.isPostsLoading
            };

        case 'POSTS_LOADING':
            return {
                ...state,
                isPostsLoading: !state.isPostsLoading
            };

        case 'SEARCH_POST':
            return {
                ...state,
                searchPost: action.payload
            };

        default:
            return state;
    }
};

export default posts;