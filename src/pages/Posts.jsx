import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {fetchPosts} from '../store/posts/actions';
import PostsView from "../components/PostsView";
import SearchPost from "../components/SearchPost";


const Posts = () => {

    const {activeUserId} = useSelector(state => state.users)
    const {posts, isPostsLoading, searchPost} = useSelector(state => state.posts)
    const dispatch = useDispatch()

    const URL = `https://jsonplaceholder.typicode.com/posts?userId=${activeUserId}`;

    useEffect(() => {
        dispatch(fetchPosts(URL))

    }, [dispatch, URL])

    const searchedPosts = searchPost.length
        ? posts.filter((post) => post.title.toLowerCase().includes(searchPost.toLowerCase()))
        : posts

    if (isPostsLoading) {
        return <p>Loading…</p>;
    }

    return (
        <div style={{marginTop: "10vh"}}>
            POSTS
            <div>
                {activeUserId && <SearchPost/>}
            </div>
            {
                !posts.length ? "Choose User"
                    : <PostsView posts={searchedPosts}/>
            }
        </div>
    )
}

export default Posts