// @ts-nocheck
import React from 'react';
import MeditationLog from './index';
import '../../static/styles/theme1.css';
import {withKnobs, text, number, boolean} from "@storybook/addon-knobs";

export default {
    title: 'Meditation Logger',
    component: MeditationLog,
    decorators: [withKnobs]
};

const viewModel = {
    userName: text('User Name', 'Meechu'),
    count: number('Coin Count', 100),
    doFormat: boolean('Should format', false),
    target: {
        dailyTarget: {
            count: '15',
            unit: 'min'
        }
    }
};

// Knobs as dynamic variables.
export const ADefaultView = () => {
    return <MeditationLog viewModel={viewModel}/>;
};