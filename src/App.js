import React from "react";
import logo from "./logo.svg";
import "./App.css";
import HomePage from "./component-views/home-page";
import { boolean, number, text } from "@storybook/addon-knobs";
import "./static/styles/theme1.css";

const viewModel = {
  userName: text("User Name", "Meechu"),
  count: number("Coin Count", 100),
  doFormat: boolean("Should format", false),
  trends: [
    {
      title: (
        <>
          <div>
            Be{" "}
            <span className="trends-title-highlight">
              Savage&nbsp;&nbsp;&nbsp;
            </span>
          </div>
          <div>Not Average&nbsp;&nbsp;</div>
        </>
      ),
    },
    {
      title: (
        <span>
          Make it happen.{" "}
          <span className="trends-title-highlight">Shock everyone</span>
        </span>
      ),
    },
  ],
  challenges: [
    {
      id: "1",
      type: "push-up",
      completed: true,
    },
    {
      id: "2",
      type: "run",
      completed: false,
    },
    {
      id: "3",
      type: "walk",
      completed: false,
    },
    {
      id: "3",
      type: "meditate",
      completed: false,
    },
  ],
};

function App() {
  return <HomePage viewModel={viewModel} />;
}

export default App;
