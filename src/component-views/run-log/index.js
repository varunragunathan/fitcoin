// @ts-nocheck
import React from 'react';
import UserTrends from "../../components/trends";
import HomeTimeLine from "../../components/home-time-line";
import ChallengeLogTile from "../../components/challenge-log-tile";
import './style.css';
import GetBackHeader from "../../components/get-back-header";
import { FaRunning }  from "react-icons/fa";
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
                        {locale.runChallenge.title}
                    </div>
                    <div className='challenge-icon-container'>
                        <IconContext.Provider value={{ color: 'var(--text-color-primary)', size: '6rem', className: 'challenge-view-log-icon'}}>
                            <FaRunning />
                        </IconContext.Provider>
                    </div>
                    <div className='target-container'>
                        <span className='challenge-target-title'>{locale.dailyTarget}</span>
                        <br />
                        <span className='challenge-daily-target'>{viewModel.target && viewModel.target.dailyTarget && viewModel.target.dailyTarget.count || '40'}</span>
                        <span className='challenge-daily-target-unit'>&nbsp;{viewModel.target && viewModel.target.dailyTarget && viewModel.target.dailyTarget.unit || 'km'}s</span>
                    </div>
                    <div className='challenge-input-container run-input-container'>
                        <div className='challenge-input-entry-container distance-container'>
                            <TextField label={locale.runChallenge.distanceEntryTitle} variant="outlined" type='number' helperText={viewModel.target.dailyTarget.unit || 'km'}/>
                        </div>
                        <div className='challenge-input-entry-container time-container'>
                            <TextField label={locale.runChallenge.timeEntryTitle} variant="outlined" type='number' helperText={locale.minutesShortHand}/>
                        </div>
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
