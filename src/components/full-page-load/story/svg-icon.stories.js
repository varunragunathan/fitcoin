// @ts-nocheck
import React from "react";
import FullPageLoad from "../index";
import "../../../static/styles/theme1.css";
import "./style.css";
import { withKnobs } from "@storybook/addon-knobs";

export default {
  title: "Full Page Loader",
  component: FullPageLoad,
  decorators: [withKnobs],
};

// Knobs as dynamic variables.
export const SampleFullPageLoader = () => {
  return (
    <div>
      <FullPageLoad />
    </div>
  );
};
