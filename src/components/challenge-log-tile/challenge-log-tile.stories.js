// @ts-nocheck
import React from 'react';
import ChallengeLogTile from './index';
import '../../static/styles/theme1.css';
import { withKnobs, boolean, text } from "@storybook/addon-knobs";

export default {
    title: 'LogTile',
    component: ChallengeLogTile,
    decorators: [withKnobs]
};

// Knobs as dynamic variables.
export const AWithDynamicValue = () => {
    const type = text('Type', 'push-up');
    const completed = boolean('Challenge completed for the day', false);
    return <ChallengeLogTile type={type} completed={completed}/>;
};

/*export const BSample100NoFormat = () => <CoinCount coinCount={100} doFormat={false} />;

export const CSample10000NoFormat = () => <CoinCount coinCount={10000} doFormat={false} />;

export const DSample10000Format = () => <CoinCount coinCount={10000} doFormat={true} />;*/
