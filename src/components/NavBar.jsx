import React from 'react';
import {Link, useLocation} from 'react-router-dom';
import {AppBar, Tab, Tabs} from "@material-ui/core";
import {useSelector} from "react-redux";

const NavBar = () => {
    const location = useLocation();
    const activeUserId = useSelector(state => state.users.activeUserId);
    
    const activeTab = location.pathname.startsWith('/posts') 
        ? `/posts/${activeUserId || ''}` 
        : location.pathname;

    return (
        <AppBar position="static">
            <Tabs value={activeTab}>
                <Tab 
                    label="Users" 
                    component={Link} 
                    to="/" 
                    value="/" 
                />
                <Tab 
                    label="Posts" 
                    component={Link} 
                    to={`/posts/${activeUserId || ''}`} 
                    value={`/posts/${activeUserId || ''}`} 
                    disabled={!activeUserId}
                />
            </Tabs>
        </AppBar>
    );
};

export default React.memo(NavBar);