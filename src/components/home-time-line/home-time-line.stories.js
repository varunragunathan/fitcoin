// @ts-nocheck
import React from 'react';
import HomeTimeLine from './index';
import '../../static/styles/theme1.css';
import { withKnobs, boolean, text } from "@storybook/addon-knobs";

export default {
    title: 'WeekDisplay',
    component: HomeTimeLine,
    decorators: [withKnobs]
};

// Knobs as dynamic variables.
export const AWithDynamicValue = () => {
    return <HomeTimeLine/>;
};

/*export const BSample100NoFormat = () => <CoinCount coinCount={100} doFormat={false} />;

export const CSample10000NoFormat = () => <CoinCount coinCount={10000} doFormat={false} />;

export const DSample10000Format = () => <CoinCount coinCount={10000} doFormat={true} />;*/
