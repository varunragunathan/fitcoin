// @ts-nocheck
import React from 'react';
import './style.css';
import CoinCount from "../coin-count";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import { deepOrange } from "@material-ui/core/colors";
import { MdHome}  from "react-icons/md";
import {IconContext} from "react-icons";
const locale = require('../../locale/eng/locale').data;

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

const TrendsHeader = () => {
    const classes = useStyles();
    return (
        <div className='trends-header-container'>
            <div className='homepage-link-container'>
                <IconContext.Provider value={{ color: 'var(--link-color-primary)', size: '26', className: 'coin-icon-container'}}>
                    <div>
                        <MdHome />
                    </div>
                </IconContext.Provider>
            </div>
            <div className='trends-title-container'>
                {locale.trends}
            </div>
        </div>
    );
};

export default TrendsHeader;
