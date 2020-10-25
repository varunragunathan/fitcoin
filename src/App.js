import React, { useEffect, useState } from "react";
// import logo from "./logo.svg";
import "./App.css";
import HomePage from "./component-views/home-page";
import "./static/styles/theme1.css";
import Helper from "./client/helper";
import SVGIcons from "./components/svg";
import FullPageLoad from "./components/full-page-load";

function App() {
  const [viewModel, setViewModel] = useState(Helper.initViewModel());
  const sampleViewModel = Helper.sampleHomePageModel();

  useEffect(() => {
    console.log("App loaded!");
    setTimeout(() => {
      console.log("Executing timeout function!");
      setViewModel({
        ...viewModel,
        homePage: Object.assign({}, viewModel.homePage, {
          render: true,
        }),
        renderWholePageSpinner: false,
      });
      console.log("Set State Called");
    }, 5000);
  });

  function HandleClick(event) {
    event.preventDefault();
    console.log("Click Event Registered!");
  }

  return (
    <>
      <SVGIcons />
      {viewModel.renderWholePageSpinner && <FullPageLoad />}
      {viewModel.homePage.render && (
        <HomePage key="HomePage" viewModel={sampleViewModel} />
      )}
    </>
  );
}

export default App;
