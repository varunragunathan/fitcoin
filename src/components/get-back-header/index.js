// @ts-nocheck
import React from 'react';
import './style.css';
import CoinCount from "../coin-count";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import { deepOrange } from "@material-ui/core/colors";

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
        <div className='greeting-header-container'>
            <div className='user-name-container'>
                <Avatar alt={userName} src="/broken-image.jpg" className={classes.orange} />
                <div className='user-name'>{userName}</div>
            </div>
            <div>
                <CoinCount coinCount={coinCount} doFormat={doFormat}/>
            </div>
        </div>
    );
};

export default GetBackHeader;
