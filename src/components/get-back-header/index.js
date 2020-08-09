// @ts-nocheck
import React from 'react';
import './style.css';
import CoinCount from "../coin-count";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import { deepOrange } from "@material-ui/core/colors";
import SvgIcon from '@material-ui/core/SvgIcon';
const locale = require('../../locale/eng/locale').data;

const HomeIcon = (props) => {
    return (
        <SvgIcon {...props}>
            <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
        </SvgIcon>
    );
};

const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        "& > *": {
            margin: theme.spacing(1)
        }
    },
    orange: {
        color: theme.palette.getContrastText(deepOrange[500]),
        backgroundColor: deepOrange[500]
    }
}));

const GetBackHeader = ({userName, coinCount, doFormat=false }) => {
    const classes = useStyles();
    return (
        <div className='get-back-header-container'>
            <div className='homepage-link-container'>
                <HomeIcon style={{ color: 'var(--link-color-primary)' }} />
                <span className='home-page-link'>{locale.home}</span>
            </div>
            <div className='get-back-user-name-container'>
                <Avatar alt={userName} src="/broken-image.jpg" className={classes.orange} />
                <div className='get-back-user-name'>{userName}</div>
            </div>
            <div>
                <CoinCount coinCount={coinCount} doFormat={doFormat}/>
            </div>
        </div>
    );
};

export default GetBackHeader;
