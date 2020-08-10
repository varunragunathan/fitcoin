// @ts-nocheck
import React from 'react';
import LeaderboardTile from '../index';
import '../../../static/styles/theme1.css';
import { withKnobs, boolean, text, number } from "@storybook/addon-knobs";
import './style.css'

export default {
    title: 'Leaderboard Tile',
    component: LeaderboardTile,
    decorators: [withKnobs]
};

// Knobs as dynamic variables.
export const AWithDynamicValue = () => {
    const userName = text('User Name', 'Meechu');
    const userTile = boolean('Active Users Tile', true);
    const index = number('Index', 1);
    return (
        <div className='leaderboard-story-container'>
            <LeaderboardTile index={index} userName={userName} userTile={userTile}/>
        </div>
    );
};

/*export const BSample100NoFormat = () => <CoinCount coinCount={100} doFormat={false} />;

export const CSample10000NoFormat = () => <CoinCount coinCount={10000} doFormat={false} />;

export const DSample10000Format = () => <CoinCount coinCount={10000} doFormat={true} />;*/
