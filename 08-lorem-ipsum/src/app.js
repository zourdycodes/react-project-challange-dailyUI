import React, { useState } from "react";
import data from "./data";

export const App = () => {
  const [count, setCount] = useState(0);
  const [text, setText] = useState([]);

  console.log(data.length);

  const handleSubmit = (e) => {
    e.preventDefault();

    // string => number
    let amount = parseInt(count);

    if (count <= 0) {
      amount = 1;
    }

    if (count >= text.length - 1) {
      amount = text.length - 1;
    }

    setText(data.slice(0, amount));
  };

  return (
    <section className="section-center">
      <h3>a new way of lorem ipsum</h3>
      <form onSubmit={handleSubmit} className="lorem-form">
        <label htmlFor="amount">paragraph:</label>
        <input
          type="number"
          name="amount"
          id="amount"
          value={count}
          onChange={({ target }) => setCount(target.value)}
        />
        <button className="btn" type="submit">
          generate
        </button>
      </form>

      <article className="lorem-text">
        {text?.map((item, index) => (
          <p key={index}>{item}</p>
        ))}
      </article>
    </section>
  );
};

export default App;
