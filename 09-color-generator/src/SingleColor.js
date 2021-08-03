import React, { useState, useEffect } from "react";
import rgbToHex from "./utils";

const SingleColor = ({ index, rgb, weight }) => {
  const [alert, setAlert] = useState(false);
  const rgbToString = rgb.join(",");

  const hex = rgbToHex(...rgb);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (alert) {
        setAlert(false);
      }
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, [alert]);

  return (
    <article
      className={`color ${index > 9 && "color-light"}`}
      style={{
        backgroundColor: `rgb(${rgbToString})`,
      }}
      onClick={() => {
        setAlert((alert) => !alert);
        navigator.clipboard.writeText(hex);
      }}
    >
      <p className="percent-value">{weight}%</p>
      <p className="color-value">{hex}</p>
      {alert && <p className="alert">copied to clipboard</p>}
    </article>
  );
};

export default SingleColor;
