// @ts-nocheck
import React from 'react';
import PushUpLog from './index';
import '../../static/styles/theme1.css';
import {withKnobs, text, number, boolean} from "@storybook/addon-knobs";

export default {
    title: 'Push Up Logger',
    component: PushUpLog,
    decorators: [withKnobs]
};

const viewModel = {
    userName: text('User Name', 'Meechu'),
    count: number('Coin Count', 100),
    doFormat: boolean('Should format', false),
    target: {
        dailyTarget: {
            count: '60'
        }
    }
};

// Knobs as dynamic variables.
export const ADefaultView = () => {
    return <PushUpLog viewModel={viewModel}/>;
};