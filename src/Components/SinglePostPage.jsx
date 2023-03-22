import React from 'react';
import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { selectPostById } from '../Store';
import PostAuthor from './PostAuthor';
import ReactionButtons from './ReactionButtons';
import TimeAgo from './TimeAgo';


const SinglePostPage = () => {

    // TODO: Get postId from react-router path name
    const { postId } = useParams();

    const post = useSelector((state) => selectPostById(state, Number(postId)));

    // console.log(post)

    if (!post) {
        return (
            <section>
                <h2>Post not found!</h2>
            </section>
        );
    }

    return (
        <article>
            <h2>{post.title}</h2>
            <h2>{post.body}</h2>
            <p>
                <Link to={`/posts/edit/${post.id}`}>Edit Post</Link>
                <PostAuthor authorId={post.userId} />
                <TimeAgo timestamp={post.date} />
            </p>
            <ReactionButtons post={post} />
        </article>
    )
}

export default SinglePostPage
