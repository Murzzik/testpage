import React from 'react';
import s from './AddPost.module.css'

const AddPost = () => {
    return (
        <div className={s.addPostContainer}>
            <textarea className={s.addPostForm} name="message"></textarea>
            <button className={s.addPostBtn} onClick={() => alert('hello')}>Send a message</button>
        </div>
    );
};

export default AddPost;