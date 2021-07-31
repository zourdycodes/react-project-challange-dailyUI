import React from "react";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";

export const Button = () => {
  return (
    <>
      <button className="prev">
        <FiChevronLeft />
      </button>

      <button className="next">
        <FiChevronRight />
      </button>
    </>
  );
};
