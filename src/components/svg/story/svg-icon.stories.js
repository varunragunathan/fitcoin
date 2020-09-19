// @ts-nocheck
import React from "react";
import SVGIcons from "../index";
import "../../../static/styles/theme1.css";
import "./style.css";
import { withKnobs, number, boolean } from "@storybook/addon-knobs";

export default {
  title: "SVG Icons",
  component: SVGIcons,
  decorators: [withKnobs],
};

// Knobs as dynamic variables.
export const AllIcons = () => {
  return (
    <div>
      <SVGIcons />
      <div className="icon-container">
        <h2>SMALL SPINNER</h2>
        <svg
          className="icon spinner-small"
          focusable="false"
          aria-hidden="true"
        >
          <use xlinkHref="#spinner-small"></use>
        </svg>
        <br />
        <br />
        <h2>LARGE SPINNER</h2>
        <svg
          className="icon spinner-large"
          focusable="false"
          aria-hidden="true"
        >
          <use xlinkHref="#spinner-large"></use>
        </svg>
      </div>
    </div>
  );
};
