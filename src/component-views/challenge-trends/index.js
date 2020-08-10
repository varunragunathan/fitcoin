// @ts-nocheck
import React from 'react';
import TrendsHeader from "../../components/trends-header";
import './style.css';
import LeaderboardTile from "../../components/leaderboard-tile";
import TextField from '@material-ui/core/TextField';
const locale = require('../../locale/eng/locale').data;

const ChallengeTrends = ({viewModel}) => {
    return (
        <div className='main-container'>
            <TrendsHeader />
            <div className='challenge-trends-container'>
                <div className='challenge-trend-item-container'>
                    <TextField
                        disabled
                        label="TOTAL DAYS"
                        defaultValue="30"
                        variant="outlined"
                    />
                </div>
                <div className='challenge-trend-item-container'>
                    <TextField
                        disabled
                        label="CURRENT DAY"
                        defaultValue="8"
                        variant="outlined"
                    />
                </div>
                <div className='challenge-trend-item-container'>
                    <TextField
                        disabled
                        label="POD MEMBERS"
                        defaultValue="10"
                        variant="outlined"
                    />
                </div>

            </div>
            <div className='leaderboard-info-container'>
                {locale.leaderboard}
            </div>
            <div className='leaderboard-container'>
                {
                    viewModel.challenge.users.map((userData, index) => (
                        <LeaderboardTile index={index} userName={userData.userName} userTile={userData.currentUser}/>
                    ))
                }
            </div>
        </div>
    );
};

export default ChallengeTrends;
