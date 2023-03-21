import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useEffectOnce } from '../Hooks';
import { fetchPosts, getPostsError, getPostsStatus, selectAllPosts } from '../Store';
import PostsExcerpt from './PostsExcerpt';



const PostList = () => {
    const dispatch = useDispatch();

    const posts = useSelector(selectAllPosts);
    const postStatus = useSelector(getPostsStatus);
    const error = useSelector(getPostsError);

    

    useEffectOnce(() => {
        if (postStatus === 'idle') {
            dispatch(fetchPosts())
        }
    }, [ postStatus, dispatch])

    let content;
    if (postStatus === 'loading') {
        content = <p>"Loading..."</p>;
    } else if (postStatus === 'succeeded') {
        const orderedPosts = posts.slice().sort((a, b) => b.date.localeCompare(a.date))
        content = orderedPosts.map(post => <PostsExcerpt key={post.id} post={post} />)
        // console.log(orderedPosts.map(p => p.id))
    } else if (postStatus === 'failed') {
        content = <p>{error}</p>;
    }

    return (
        <section>
            <h2>Posts</h2>
            {content}
        </section>
    )
}

export default PostList
