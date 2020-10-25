import { boolean, number, text } from "@storybook/addon-knobs";
import React from "react";

class Helper {
  static initViewModel = () => {
    return {
      renderWholePageSpinner: true,
      homePage: {
        render: false,
      },
      trendsPage: {
        render: false,
      },
      user: {
        name: null,
        fName: null,
        lName: null,
      },
      app: {
        authId: null,
      },
    };
  };

  static sampleHomePageModel = () => {
    return {
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
  };
}

export default Helper;
