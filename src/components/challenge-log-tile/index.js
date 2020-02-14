// @ts-nocheck
import React from 'react';
import { IconContext } from "react-icons";
import { FaDumbbell }  from "react-icons/fa";
import { IoIosAdd }  from "react-icons/io";
import { Types } from '../../common/constants/exercise-types';
import IconButton from '@material-ui/core/IconButton';
import './style.css';

const locale = require('../../locale/eng/locale').data;


const ChallengeLogTile = ({id, type='push-up', completed=false}) => {
    return (
        <div
            className={`challenge-log-tile-container ${completed ? 'status-completed' : 'status-incomplete'}`}
            id={id}
        >
            {
                type===Types['PUSH_UP'] &&
                    <>
                        <div className='log-tile-icon-container'>
                            <IconContext.Provider value={{ color: 'iron', size: '60', className: 'log-tile-icon'}}>
                                <FaDumbbell />
                            </IconContext.Provider>
                        </div>
                        <div className='log-tile-body'>
                            <div>
                                {locale.logToday}
                            </div>
                            <div>
                                <IconButton aria-label="add" disabled={completed} >
                                    <IoIosAdd />
                                </IconButton>
                            </div>
                        </div>
                    </>
            }
        </div>
    );
};

export default ChallengeLogTile;
