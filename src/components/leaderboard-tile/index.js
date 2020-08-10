// @ts-nocheck
import React from 'react';
import { IconContext } from "react-icons";
import { FaDumbbell, FaRunning, FaWalking}  from "react-icons/fa";
import { GiSpikedHalo } from "react-icons/gi";
import { IoIosAdd }  from "react-icons/io";
import { Types } from '../../common/constants/exercise-types';
import IconButton from '@material-ui/core/IconButton';
import './style.css';
import { deepOrange } from "@material-ui/core/colors";
import Avatar from "@material-ui/core/Avatar";
import {makeStyles} from "@material-ui/core/styles";

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

const LeaderboardTile = ({index, userName='Meechu', userTile=false}) => {
    const classes = useStyles();
    return (
        <div
            className={`leaderboard-tile-container ${ userTile && 'active-tile'}`}
            id={index}
        >
            <div className='leaderboard-tile-index-container'>
                {index + 1}.
            </div>
            <div className='leaderboard-tile-body-container'>
                <Avatar alt={userName} src="/broken-image.jpg" className={userTile && classes.orange} />
                <div className='user-name'>{userName}</div>
            </div>
        </div>
    );
};

export default LeaderboardTile;
