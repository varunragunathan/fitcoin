// @ts-nocheck
import React from 'react';
import RunLog from './index';
import '../../static/styles/theme1.css';
import {withKnobs, text, number, boolean} from "@storybook/addon-knobs";

export default {
    title: 'Run Logger',
    component: RunLog,
    decorators: [withKnobs]
};

const viewModel = {
    userName: text('User Name', 'Meechu'),
    count: number('Coin Count', 100),
    doFormat: boolean('Should format', false),
    target: {
        dailyTarget: {
            count: '5',
            time: '',
            unit: 'km'
        }
    }
};

// Knobs as dynamic variables.
export const ADefaultView = () => {
    return <RunLog viewModel={viewModel}/>;
};