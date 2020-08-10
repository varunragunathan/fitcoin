// @ts-nocheck
import React from 'react';
import ChallengeTrends from './index';
import '../../static/styles/theme1.css';
import {withKnobs, text, number, boolean} from "@storybook/addon-knobs";

export default {
    title: 'Challenge Trends',
    component: ChallengeTrends,
    decorators: [withKnobs]
};

const viewModel = {
    userName: text('User Name', 'Meechu'),
    count: number('Coin Count', 100),
    doFormat: boolean('Should format', false),
    challenge: {
        users: [
            {
                userName: 'Karthik Regunathan',
                currentUser: false
            },
            {
                userName: 'Meenakshi Sundaram R',
                currentUser: true
            },
            {
                userName: 'Sona Dheep',
                currentUser: false
            },
            {
                userName: 'Jerry',
                currentUser: false
            }
        ]
    }
};

// Knobs as dynamic variables.
export const ADefaultView = () => {
    return <ChallengeTrends viewModel={viewModel}/>;
};