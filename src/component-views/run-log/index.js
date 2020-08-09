// @ts-nocheck
import React from 'react';
import GreetingsHeader from "../../components/greetings-header";
import UserTrends from "../../components/trends";
import HomeTimeLine from "../../components/home-time-line";
import ChallengeLogTile from "../../components/challenge-log-tile";
import './style.css';



const locale = require('../../locale/eng/locale').data;

const HomePage = ({viewModel}) => {
    return (
        <div className='main-container'>
            <GreetingsHeader userName={viewModel.userName} coinCount={viewModel.count} doFormat={viewModel.doFormat}/>
            <UserTrends trends={viewModel.trends}/>
            <div className='timeline-header'>
                {locale.logGoal}
            </div>
            <HomeTimeLine/>
            <div className='timeline-info'>
                {locale.today}
            </div>
            <div className='challenges-container'>
                {
                    viewModel.challenges.map((challenge, key)=> (
                        <ChallengeLogTile type={challenge.type} completed={challenge.completed}/>
                    ))
                }
            </div>
        </div>
    );
};

export default HomePage;
