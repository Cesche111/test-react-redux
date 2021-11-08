import React from 'react'
import {useDispatch, useSelector} from 'react-redux'

import {searchByPost} from '../store/posts/actions';


const SearchPost = () => {

    const searchPost = useSelector(state => state.posts.searchPost);
    const dispatch = useDispatch()

    const handleChange = (event) => {
        dispatch(searchByPost(event.target.value))
    }


    const handleClick = () => {
        dispatch(searchByPost(""))
    }

    return (
        <>
            <input
                onChange={handleChange}
                type="text"
                placeholder="Search"
                value={searchPost}
                className="Search"
            />
            <button onClick={handleClick}>✕</button>
        </>
    )
}

export default SearchPost