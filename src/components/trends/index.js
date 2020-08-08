// @ts-nocheck
import React from 'react';
import './style.css';

const UserTrends = ({trends}) => {
    return (
        <div className='user-trends-container'>
            <div className='user-trend-item'>
                {trends[0].title}
            </div>
        </div>
    );
};

export default UserTrends;
