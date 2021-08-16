import React, { useEffect, useState } from "react";
import { Switch, useLocation } from "react-router-dom";
import TopBarProgress from "react-topbar-progress-indicator";

export const CustomSwitch = ({ children }) => {
  const [progress, setProgress] = useState(false);
  const [prevLoc, setPrevLoc] = useState("");
  const location = useLocation();

  /**
    Whenever location changed, first useEffect hook will run and change the previous location & set progress bar to true.
   */
  useEffect(() => {
    setPrevLoc(location.pathname);
    setProgress(true);
  }, [location]);

  /**
    And whenever previous location changed the second useEffect will run and change progress bar back to false.
   */
  useEffect(() => {
    setProgress(false);
  }, [prevLoc]);

  return (
    <>
      {progress && <TopBarProgress />}
      <Switch>{children}</Switch>
    </>
  );
};
