import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom'
import { selectAllAuthors, selectPostById } from '../Store';

const EditPostPage = () => {

    const { postId } = useParams();
    const navigate = useNavigate();

    const post = useSelector((state) => selectPostById(state, postId));
    const authors = useSelector(selectAllAuthors);

    const [title, setTitle] = useState(post?.title);
    const [content, setContent] = useState(post?.body);
    const [authorId, setAuthorId] = useState(post?.userId);
    const [requestStatus, setRequestStatus] = useState('idle');

    const dispatch = useDispatch();

    if (!post) {
        return (
            <section>
                <h2>Post not found!</h2>
            </section>
        )
    }

    const onTitleChanged = e => setTitle(e.target.value)
    const onContentChanged = e => setContent(e.target.value)
    const onAuthorChanged = e => setAuthorId(Number(e.target.value))

    const canSave = [title, content, authorId].every(Boolean) && requestStatus === 'idle';

    const onSavePostclicked = () => {
        if (canSave) {
            try {

                setRequestStatus('pending');
                dispatch(); //TODO
                setTitle('')
                setContent('')
                setAuthorId('')
                navigate(`posts/post/${postId}`)

            } catch (e) {
                console.error('Failed to save the post', e);
            } finally {
                setRequestStatus('idle')
            }
        }
    }

    const usersOptions = authors.map(author => (
        <option
            key={author.id}
            value={author.id}
        >{author.name}</option>
    ))

    const onDeletePostClicked = () => {
        try {
            setRequestStatus('pending')
            dispatch(deletePost({ id: post.id })).unwrap()

            setTitle('')
            setContent('')
            setAuthorId('')
            navigate('/')
        } catch (err) {
            console.error('Failed to delete the post', err)
        } finally {
            setRequestStatus('idle')
        }
    }


    return (
        <section>
            <h2>Edit Post</h2>
            <form>
                <label htmlFor="postTitle">Post Title:</label>
                <input
                    type="text"
                    id="postTitle"
                    name="postTitle"
                    value={title}
                    onChange={onTitleChanged}
                />
                <label htmlFor="postAuthor">Author:</label>
                <select id="postAuthor" value={authorId} onChange={onAuthorChanged}>
                    <option value=""></option>
                    {usersOptions}
                </select>
                <label htmlFor="postContent">Content:</label>
                <textarea
                    id="postContent"
                    name="postContent"
                    value={content}
                    onChange={onContentChanged}
                />
                <button
                    type="button"
                    onClick={onSavePostClicked}
                    disabled={!canSave}
                >
                    Save Post
                </button>
                <button className="deleteButton"
                    type="button"
                    onClick={onDeletePostClicked}
                >
                    Delete Post
                </button>
            </form>
        </section>
    )
}

export default EditPostPage
