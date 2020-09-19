// @ts-nocheck
import React from "react";
import "./style.css";
import CoinCount from "../coin-count";
import { makeStyles } from "@material-ui/core/styles";
import { deepOrange } from "@material-ui/core/colors";
import { MdHome } from "react-icons/md";
import { IconContext } from "react-icons";
const locale = require("../../locale/eng/locale").data;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  orange: {
    color: theme.palette.getContrastText(deepOrange[500]),
    backgroundColor: deepOrange[500],
  },
}));

const GetBackHeader = ({ userName, coinCount, doFormat = false }) => {
  const classes = useStyles();
  return (
    <div className="get-back-header-container">
      <div className="homepage-link-container">
        <IconContext.Provider
          value={{
            color: "var(--link-color-primary)",
            size: "26",
            className: "coin-icon-container",
          }}
        >
          <div>
            <MdHome />
          </div>
        </IconContext.Provider>
        <span className="home-page-link">{locale.home}</span>
      </div>
      {/*<div className='get-back-user-name-container'>
                <Avatar alt={userName} src="/broken-image.jpg" className={classes.orange} />
                <div className='get-back-user-name'>{userName}</div>
            </div>*/}
      <div>
        <CoinCount coinCount={coinCount} doFormat={doFormat} />
      </div>
    </div>
  );
};

export default GetBackHeader;
