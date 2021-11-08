import React from 'react'
import {useDispatch, useSelector} from 'react-redux'

import {searchByName} from '../store/users/actions';


const Search = () => {

    const searchText = useSelector(state => state.users.searchName);
    const dispatch = useDispatch()

    const handleChange = (event) => {
        dispatch(searchByName(event.target.value))
    }


    const handleClick = () => {
        dispatch(searchByName(""))
    }

    return (
        <>
            <input
                onChange={handleChange}
                type="text"
                placeholder="Search"
                value={searchText}
                className="Search"
            />
            <button onClick={handleClick}>✕</button>
        </>
    )
}

export default Search