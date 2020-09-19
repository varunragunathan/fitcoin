// @ts-nocheck
import React, { useEffect } from "react";

const OnLoadScript = ({ prop1, prop2 }) => {
  useEffect(() => {
    // Add scripts to be executed on load
    console.log("Component Loaded! Logging to console!");
  });

  return <div />;
};

export default OnLoadScript;
