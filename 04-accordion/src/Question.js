import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

export const Question = ({ title, info }) => {
  const [toggle, setToggle] = useState(false);

  return (
    <article className="question">
      <header>
        <h4>{title}</h4>
        <button
          className="btn"
          type="button"
          onClick={() => setToggle((toggle) => !toggle)}
        >
          {toggle ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>
      {toggle && <p>{info}</p>}
    </article>
  );
};
