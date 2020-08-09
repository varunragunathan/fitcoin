// @ts-nocheck
import React from 'react';
import UserTrends from '../index';
import '../../../static/styles/theme1.css';
import './style.css'

export default {
    title: 'UserTrends',
    component: UserTrends
};

// Knobs as dynamic variables.
export const SampleTrends = () => {
    const trends = [
        {
            title: <p>Be <div className="trends-title-highlight">Savage</div>.<br /> Not Average </p>
        },
        {
            title: <p>Make it happen.<br /> <span className="trends-title-highlight">Shock everyone</span></p>
        }
    ];
    return (
        <div className='story-container'>
            <UserTrends trends={trends}/>
        </div>
    );
};
