// @ts-nocheck
import React from 'react';
import CoinCount from './index';
import '../../static/styles/theme1.css';
import { withKnobs, number, boolean } from "@storybook/addon-knobs";

export default {
    title: 'CoinCount',
    component: CoinCount,
    decorators: [withKnobs]
};

// Knobs as dynamic variables.
export const AWithDynamicValue = () => {
    const count = number('Coin Count', 100);
    const doFormat = boolean('Should format', false);
    return <CoinCount coinCount={count} doFormat={doFormat}/>;
};

export const BSample100NoFormat = () => <CoinCount coinCount={100} doFormat={false} />;

export const CSample10000NoFormat = () => <CoinCount coinCount={10000} doFormat={false} />;

export const DSample10000Format = () => <CoinCount coinCount={10000} doFormat={true} />;
