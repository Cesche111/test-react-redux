import React from 'react';
import {useDispatch, useSelector} from 'react-redux';

const Search = ({action, selector}) => {
    const searchText = useSelector(selector);
    const dispatch = useDispatch();

    const handleChange = (e) => dispatch(action(e.target.value));
    const handleClear = () => dispatch(action(''));

    return (
        <div className="search-wrapper">
            <input
                type="text"
                placeholder="Search"
                value={searchText}
                onChange={handleChange}
                className="Search"
            />
            <button onClick={handleClear}>✕</button>
        </div>
    );
};

export default React.memo(Search);