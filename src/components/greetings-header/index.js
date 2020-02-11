// @ts-nocheck
import React from 'react';
import './style.css';
import CoinCount from "../coin-count";

const GreetingsHeader = ({userName, coinCount, doFormat=false }) => {
    return (
        <div className='greeting-header-container'>
            <div className='user-name-container'>
                <span className='user-name'>{userName}</span>
            </div>
            <div>
                <CoinCount coinCount={coinCount} doFormat={doFormat}/>
            </div>

        </div>
    );
};

export default GreetingsHeader;
