// @ts-nocheck
import React from 'react';
import NewUserJoinView from './index';
import '../../static/styles/theme1.css';
import { withKnobs, text } from "@storybook/addon-knobs";

export default {
    title: 'NewUserJoinView',
    component: NewUserJoinView,
    decorators: [withKnobs]
};

// Knobs as dynamic variables.
export const ADefaultView = () => {
    return <NewUserJoinView requestInviteUrl='https://www.fitnesscoin.com/request/invite'/>;
};