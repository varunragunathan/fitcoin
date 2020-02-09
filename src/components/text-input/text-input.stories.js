// @ts-nocheck
import React from 'react';
import TextInput from './index';
import '../../static/styles/theme1.css';
import { withKnobs, text, boolean } from "@storybook/addon-knobs";

export default {
    title: 'Text Input',
    component: TextInput,
    decorators: [withKnobs]
};

export const AWithDynamicValue = () => {
    const label = text('Label', 'Sample Label');
    const isDisabled = boolean('Disabled', false);
    const hasError = boolean('Error', false);
    return (
        <div style={{'width': '400px', 'margin': '1rem'}}>
            <TextInput label={label} isDisabled={isDisabled} hasError={hasError}/>
        </div>
    );
};

export const BWithDefaultValue = () => {
    const label = text('Label', 'Enter Email');
    const isDisabled = boolean('Disabled', false);
    const hasError = boolean('Error', false);
    const defaultValue = text('Default Value', 'getfit@fitcoin.com');
    return (
        <div style={{'width': '200px', 'margin': '1rem'}}>
            <TextInput label={label} isDisabled={isDisabled} hasError={hasError} defaultValue={defaultValue}/>
        </div>
    );
};
