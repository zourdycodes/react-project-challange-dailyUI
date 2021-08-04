import React, { useEffect } from "react";

const Alert = ({ type, msg, removeAlert, list }) => {
  useEffect(() => {
    let timer = setTimeout(() => {
      removeAlert();
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, [list]);

  return <h3 className={`alert alert-${type}`}>{msg}</h3>;
};

export default Alert;
