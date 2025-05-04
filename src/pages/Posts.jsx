import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {fetchPosts, searchByPost} from '../store/posts/actions';
import PostsView from "../components/PostsView";
import Search from "../components/Search";

const Posts = () => {
    const {activeUserId, users} = useSelector(state => state.users); // Добавлено users
    const {posts, isPostsLoading, searchPost, hasErrored} = useSelector(state => state.posts);
    const dispatch = useDispatch();
    const URL = `https://jsonplaceholder.typicode.com/posts?userId=${activeUserId}`;

    // Получаем имя пользователя
    const activeUserName = users.find(user => user.id === activeUserId)?.name || "";

    useEffect(() => {
        dispatch(fetchPosts(URL));
    }, [dispatch, URL]);

    const searchedPosts = searchPost 
        ? posts.filter(post => post.title.toLowerCase().includes(searchPost.toLowerCase()))
        : posts;

    if (hasErrored) return <p>Error loading posts</p>;
    if (isPostsLoading) return <p>Loading...</p>;

    return (
        <div style={{marginTop: "10vh"}}>
            POSTS {activeUserName && `- ${activeUserName}`} {/* Добавлено имя */}
            <div>
                {activeUserId && <Search 
                    action={searchByPost} 
                    selector={state => state.posts.searchPost} 
                />}
            </div>
            {!posts.length ? "Choose User" : <PostsView posts={searchedPosts}/>}
        </div>
    );
};

export default React.memo(Posts);