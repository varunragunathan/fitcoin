// @ts-nocheck
import React from 'react';
import OnLoadScript from './index';

export default {
    title: 'ClickTracking',
    component: OnLoadScript,
};

export const First = () => <OnLoadScript />;

export const Second = () => (
    <OnLoadScript />
);
