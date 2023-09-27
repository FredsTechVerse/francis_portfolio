import React from "react";
import { NavigationDots, SocialMedia } from "../components";
// A HOC TAKES IN A COMPONENT AS AN ARGUMENT AND SOMEHOW RETURNS A NEW COMPONENT AS THE RESULT.

// WE CAN TAKE IN A FORM THEN RETURN A MODAL.
const AppWrap = (Component, idName, classNames) =>
  function HOC() {
    return (
      // Display for the content inside the app container has been set to row.
      <div id={idName} className={`app__container ${classNames}`}>
        <SocialMedia />
        <div className="app__wrapper app__flex">
          <Component />
        </div>
        <div>
          <NavigationDots active={idName} />
        </div>
      </div>
    );
  };

export default AppWrap;
