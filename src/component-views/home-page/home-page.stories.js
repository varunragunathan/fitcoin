// @ts-nocheck
import React from 'react';
import HomePage from './index';
import '../../static/styles/theme1.css';
import {withKnobs, text, number, boolean} from "@storybook/addon-knobs";

export default {
    title: 'HomePage',
    component: HomePage,
    decorators: [withKnobs]
};

const viewModel = {
    userName: text('User Name', 'Meechu'),
    count: number('Coin Count', 100),
    doFormat: boolean('Should format', false),
    trends: [
        {
            title: <>
                <div>Be <span className='trends-title-highlight'>Savage&nbsp;&nbsp;&nbsp;</span></div><div>Not Average&nbsp;&nbsp;</div>
            </>
        },
        {
            title: <span>Make it happen. <span className="trends-title-highlight">Shock everyone</span></span>
        }
    ],
    challenges: [
        {
            id: '1',
            type: 'push-up',
            completed: true
        },
        {
            id: '2',
            type: 'run',
            completed: false
        },
        {
            id: '3',
            type: 'walk',
            completed: false
        },
        {
            id: '3',
            type: 'meditate',
            completed: false
        },
    ]
};

// Knobs as dynamic variables.
export const ADefaultView = () => {
    return <HomePage viewModel={viewModel}/>;
};