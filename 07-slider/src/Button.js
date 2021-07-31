import React from "react";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";

export const Button = ({ setIndex }) => {
  return (
    <>
      <button className="prev" onClick={() => setIndex((index) => index - 1)}>
        <FiChevronLeft />
      </button>

      <button className="next" onClick={() => setIndex((index) => index + 1)}>
        <FiChevronRight />
      </button>
    </>
  );
};
