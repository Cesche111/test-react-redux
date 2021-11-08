import React from 'react';
import {Link, Route} from 'react-router-dom';
import '../App.css';
import {AppBar, Tab, Tabs} from "@material-ui/core";
import {useSelector} from "react-redux";


const NavBar = () => {
    const id = useSelector(state => state.users.activeUserId)
    const routes = ["/", `/posts/${id}`];
    return (<Route
        path="/"
        render={(history) => (
            <AppBar>
                <Tabs
                    value={
                        history.location.pathname !== "/"
                            ? history.location.pathname
                            : false
                    }
                >
                    <Tab
                        value={routes[0]}
                        label="Users"
                        component={Link}
                        to={routes[0]}
                    />
                    <Tab
                        value={routes[1]}
                        label="Posts"
                        component={Link}
                        to={routes[1]}
                    />
                </Tabs>
            </AppBar>
        )}
    />)
}

export default NavBar;