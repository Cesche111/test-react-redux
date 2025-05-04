import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {fetchUsers, setActiveUser, searchByName} from '../store/users/actions';
import TableUsers from '../components/TableUsers';
import Search from '../components/Search';

const URL = `https://jsonplaceholder.typicode.com/users`;

const Users = () => {
    const {users, isLoading, searchName, hasErrored} = useSelector(state => state.users);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchUsers(URL));
    }, [dispatch]);

    const handlePostsDispatch = (id) => dispatch(setActiveUser(id));

    const searchedUsers = searchName 
        ? users.filter(user => user.name.toLowerCase().includes(searchName.toLowerCase()))
        : users;

    if (hasErrored) return <p>Error loading users</p>;
    if (isLoading) return <p>Loading...</p>;

    return (
        <div style={{marginTop: "10vh"}}>
            USERS
            <Search 
                action={searchByName} 
                selector={state => state.users.searchName} 
            />
            <TableUsers users={searchedUsers} onClickUser={handlePostsDispatch}/>
        </div>
    );
};

export default React.memo(Users);