import React from 'react';
import s from './Posts.module.css'

type PostType = {
    name: string;
    message: string
    date: string
}

const Posts = (props: PostType) => {
    return (
        <div className={s.postsContainer}>
            <span className={s.name}>{props.name}</span>
            <span className={s.date}>{props.date}</span>
            <div className={s.windowTriangle}></div>
            <div className={s.postWindow}>
                <p>{props.message}</p>
            </div>
        </div>
    );
};

export default Posts;

