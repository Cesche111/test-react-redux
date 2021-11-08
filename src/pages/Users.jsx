import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {fetchUsers, setActiveUser} from '../store/users/actions';
import TableUsers from '../components/TableUsers';
import Search from '../components/Search';


const URL = `https://jsonplaceholder.typicode.com/users`;

const Users = () => {

    const {users, isLoading, searchName} = useSelector(state => state.users)
    const dispatch = useDispatch()


    useEffect(() => {
        dispatch(fetchUsers(URL))
    }, [dispatch])

    const handlePostsDispatch = (id) => {
        dispatch(setActiveUser(id))
    }

    const searchedUsers = searchName.length
        ? users.filter((user) => user.name.toLowerCase().includes(searchName.toLowerCase()))
        : users


    if (users.hasErrored) {
        return <p>Sorry! There was an error loading the items</p>;
    }

    if (isLoading) {
        return <p>Loading…</p>;
    }

    return (
        <div style={{marginTop: "10vh"}}>
            USERS
            <div>
                <Search/>
            </div>
            <TableUsers users={searchedUsers} onClickUser={handlePostsDispatch}/>
        </div>
    )
}

export default React.memo(Users)