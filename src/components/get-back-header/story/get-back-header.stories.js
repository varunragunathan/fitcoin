// @ts-nocheck
import React from 'react';
import GetBackHeader from '../index';
import '../../../static/styles/theme1.css';
import './style.css'
import { withKnobs, text, number, boolean } from "@storybook/addon-knobs";

export default {
    title: 'Get Back Header',
    component: GetBackHeader,
    decorators: [withKnobs]
};

// Knobs as dynamic variables.
export const AWithDynamicValue = () => {
    const userName = text('User Name', 'Meechu');
    const count = number('Coin Count', 100);
    const doFormat = boolean('Should format', false);
    return (
        <div className='greetings-header-main-container'>
            <div className='story-container'>
                <GetBackHeader userName={userName} coinCount={count} doFormat={doFormat}/>
            </div>
        </div>
    );
};
