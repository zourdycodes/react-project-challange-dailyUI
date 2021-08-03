import React, { useState } from "react";
import SingleColor from "./SingleColor";

import Values from "values.js";

export const App = () => {
  const [color, setColor] = useState("");
  const [error, setError] = useState(false);
  const [list, setList] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    try {
      let colors = new Values(color).all(10);
      console.log(colors);
    } catch (error) {
      setError((error) => !error);
    }
  };

  return (
    <>
      <section className="container">
        <h3>Color Generator</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            className={`${error ? "error" : null}`}
            placeholder="#f15025"
            value={color}
            onChange={({ target }) => setColor(target.value)}
          />
          <button className="btn" type="submit">
            submit
          </button>
        </form>
      </section>
      <section className="colors">
        <h4>list goes here</h4>
      </section>
    </>
  );
};
