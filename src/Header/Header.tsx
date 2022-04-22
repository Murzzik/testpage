import React from 'react';
import s from './Header.module.css'
import mainImage from '../common/image/mainImg.jpg'

const Header = () => {
    return (
        <div className={s.headerContainer}>
            <div className={s.imgContainer}><img src={mainImage} alt=""/></div>
            <div className={s.authorDescr}>
                <span className={s.authorName}>Eva Jonson</span>
                <span className={s.authorPosition}>Sales Manager</span>
                <div className={s.authorOffer}>
                    <p>
                        I will find the best offers for you.
                        My services are absolutely free.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Header;