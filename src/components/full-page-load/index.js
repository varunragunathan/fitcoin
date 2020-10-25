// @ts-nocheck
import React from "react";
import "./style.css";
import SVGIcons from "../svg";

const FullPageLoad = () => {
  return (
    <>
      <SVGIcons />
      <div className="spinner-large-container">
        <h1 className="fit-coin--loading-header">FitCoin</h1>
        <svg
          className="icon spinner-large"
          focusable="false"
          aria-hidden="true"
        >
          <use xlinkHref="#spinner-large"></use>
        </svg>
      </div>
    </>
  );
};

export default FullPageLoad;
