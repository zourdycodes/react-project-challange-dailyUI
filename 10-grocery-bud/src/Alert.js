import React, { useEffect } from "react";

const Alert = ({ type, msg }) => {
  return <h3 className={`alert alert-${type}`}>{msg}</h3>;
};

export default Alert;
