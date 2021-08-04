import React, { useEffect } from "react";

const Alert = ({ type, msg, removeAlert }) => {
  useEffect(() => {
    let timer = setTimeout(() => {
      removeAlert();
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return <h3 className={`alert alert-${type}`}>{msg}</h3>;
};

export default Alert;
