import React from "react";
import OnLoadScript from "../index";

export default {
  title: "On Load Scripts To be Executed",
  component: OnLoadScript,
};

export const Default = () => (
  <div
    style={{ display: "flex", alignItems: "center", flexDirection: "column" }}
  >
    <h2 style={{ textAlign: "center" }}>
      Check console for component on load script's message!
    </h2>
    <OnLoadScript />
  </div>
);
