// @ts-nocheck
import React from 'react';
import { IconContext } from "react-icons";
import { AiOutlineDollar }  from "react-icons/ai";
import './style.css';
import numeral from 'numeral';

const CoinCount = ({coinCount, doFormat=false }) => {
    return (
        <div className='coin-count-container'>
            <IconContext.Provider value={{ color: 'gold', size: '24', className: 'coin-icon-container'}}>
                <div>
                    <AiOutlineDollar />
                </div>
            </IconContext.Provider>
            <div className='coin-count-container'>
                <span className='coin-count-label'>
                    {
                        doFormat ? numeral(coinCount).format('0.0a') : coinCount
                    }
                </span>
            </div>
        </div>
    );
};

export default CoinCount;
