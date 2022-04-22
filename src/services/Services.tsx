import React from 'react';
import s from './Services.module.css'

const Services = () => {
    return (
        <div className={s.servicesWrapper}>
            <div className={s.servicesContainer}>
                <span className={s.servicesTitle}>Service</span>
                <div className={s.servicesBlock}>
                    <div className={s.servicesGraph}>
                        <div className={s.serviceItemContainer}>
                            <div className={s.serviceItem1}>Manual tour booking</div>
                            <div className={s.serviceCount}>11</div>
                        </div>
                        <div className={s.serviceItemContainer}>
                            <div className={s.serviceItem2}>Package tours</div>
                            <div className={s.serviceCount}>3</div>
                        </div>
                        <div className={s.serviceItemContainer}>
                            <div className={s.serviceItem3}>Hotels</div>
                            <div className={s.serviceCount}>1</div>
                        </div>
                    </div>
                    <div className={s.servicesGraphTotal}>
                        <span>Total</span>
                        <span>14</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;