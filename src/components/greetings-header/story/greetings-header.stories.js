// @ts-nocheck
import React from 'react';
import GreetingsHeader from '../index';
import '../../../static/styles/theme1.css';
import './style.css'
import { withKnobs, text, number, boolean } from "@storybook/addon-knobs";

export default {
    title: 'GreetingsHeader',
    component: GreetingsHeader,
    decorators: [withKnobs]
};

// Knobs as dynamic variables.
export const AWithDynamicValue = () => {
    const userName = text('User Name', 'Meechu');
    const count = number('Coin Count', 100);
    const doFormat = boolean('Should format', false);
    return (
        <div className='story-container'>
            <GreetingsHeader userName={userName} coinCount={count} doFormat={doFormat}/>
        </div>
    );
};
