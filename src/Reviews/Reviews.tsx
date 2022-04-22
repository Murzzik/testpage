import React from 'react';
import s from './Reviews.module.css'
import likeIcon from '../common/image/likeIcon.png'
import commentIcon from '../common/image/commentIcon.png'

const Reviews = () => {
    return (
        <div className={s.reviewsContainer}>
            <div className={s.reviewsTitle}>
                <span>Latest reviews</span>
                <a href="#">All reviews</a>
            </div>
            <div className={s.reviewsCount}>
                <span><img src={likeIcon} alt="likeHeartIcon"/> 131</span>
                <span><img src={commentIcon} alt="commentIcon"/> 14</span>
            </div>
        </div>
    );
};

export default Reviews;