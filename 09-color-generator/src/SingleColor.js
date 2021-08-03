import React, { useState, useEffect } from "react";
import rgbToHex from "./utils";

const SingleColor = ({ index, rgb, weight }) => {
  const [alert, setAlert] = useState(false);
  const rgbToString = rgb.join(",");

  const hex = rgbToHex(...rgb);

  return (
    <article
      className={`color`}
      style={{
        backgroundColor: `rgb(${rgbToString})`,
      }}
    >
      <p className="percent-value">{weight}%</p>
      <p className="color-value">{hex}</p>
    </article>
  );
};

export default SingleColor;
