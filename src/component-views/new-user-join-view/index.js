// @ts-nocheck
import React from 'react';
import { Button, Link } from '@material-ui/core';
import TextInput from "../../components/text-input";
import './style.css';

const locale = require('../../locale/eng/locale').data;

const NewUserJoinView = ({inviteCode='', userName='', userEmail='', requestInviteUrl}) => {
    return (
        <div className='invite-join-container'>
            <div className='main-header-container'>
                <h1>{locale.fitCoin}</h1>
            </div>
            <div className='form-container'>
                <div className='intro-msg-container'>
                    <span dangerouslySetInnerHTML={{__html: locale.logInIntro1}} />
                </div>
                <div className='input-fields-container'>
                    <div className='invite-join-text-box-container invite-code-container'>
                        <TextInput label={locale.yourInviteCode} defaultValue={inviteCode}/>
                    </div>
                    <div className='invite-join-text-box-container user-name-input-container'>
                        <TextInput label={locale.yourName} defaultValue={userName}/>
                    </div>
                    <div className='invite-join-text-box-container user-email-input-container'>
                        <TextInput label={locale.yourEmail} defaultValue={userEmail}/>
                    </div>
                </div>
            </div>
            <div className='actions-container'>
                <div className='back-button-container'>
                    <Button color="secondary">{locale.back}</Button>
                </div>
                <div className='join-button-container'>
                    <Button color="primary">{locale.join}</Button>
                </div>
            </div>
            <div className='request-invite-link-container'>
                <Link
                    component="button"
                    variant="body2"
                    onClick={() => {
                        window.location.href = requestInviteUrl;
                    }}
                >
                    {locale.requestAnInvite}
                </Link>
            </div>
        </div>
    );
};

export default NewUserJoinView;
