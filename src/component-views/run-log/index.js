// @ts-nocheck
import React from 'react';
import UserTrends from "../../components/trends";
import HomeTimeLine from "../../components/home-time-line";
import ChallengeLogTile from "../../components/challenge-log-tile";
import './style.css';
import GetBackHeader from "../../components/get-back-header";
import { FaDumbbell }  from "react-icons/fa";
import { GiSpikedHalo } from "react-icons/gi";
import { IoIosAdd }  from "react-icons/io";
import { Types } from '../../common/constants/exercise-types';
import IconButton from '@material-ui/core/IconButton';
import {IconContext} from "react-icons";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
const locale = require('../../locale/eng/locale').data;

const RunLog = ({viewModel}) => {
    return (
        <div className='challenge-main-container'>
            <GetBackHeader userName={viewModel.userName} coinCount={viewModel.count} doFormat={viewModel.doFormat}/>
            <div className='challenge-body-container'>
                <div className='challenge-body-top'>
                    <div className='title-container'>
                        {locale.pushUpChallenge.title}
                    </div>
                    <div className='challenge-icon-container'>
                        <IconContext.Provider value={{ color: 'var(--text-color-primary)', size: '6rem', className: 'challenge-view-log-icon'}}>
                            <FaDumbbell />
                        </IconContext.Provider>
                    </div>
                    <div className='target-container'>
                        <span className='challenge-target-title'>{locale.dailyTarget}</span>
                        <br />
                        <span className='challenge-daily-target'>{viewModel.target && viewModel.target.dailyTarget || '40'}</span>
                    </div>
                    <div className='challenge-input-container'>
                        <TextField label={locale.countInputHelper} variant="outlined" type='number' />
                    </div>
                </div>
                <div className='challenge-submit-button-container'>
                    <Button size="large" variant="outlined" color="primary">
                        {locale.log}
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default RunLog;
