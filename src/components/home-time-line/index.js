// @ts-nocheck
import React from 'react';
import { currentWeek } from '../../common/constants/constants';
import './style.css';
const locale = require('../../locale/eng/locale').data;


const HomeTimeLine = ({id, type='push-up', completed=false}) => {
    return (
        <div style={{padding: `2rem 0 2rem`}}>
        <div
            className={`current-week-display`}
            id={id}
        >
            {
                currentWeek.map((day, key) => (
                    <div className='day-title-container'>
                        <div className={`day-title ${day.current ? "active" : ""}`}>{day.title}</div>
                    </div>
                ))
            }
        </div>
        </div>
    );
};

export default HomeTimeLine;
