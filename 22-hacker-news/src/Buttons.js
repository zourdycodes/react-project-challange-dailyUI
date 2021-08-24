import React from "react";
import { useGlobalContext } from "./context";

const Buttons = () => {
  const { isLoading, page, numberPages, handlePage } = useGlobalContext();
  return (
    <div className="btn-container">
      <button disabled={isLoading} onClick={() => handlePage("DECREASING")}>
        prev
      </button>
      <p
        style={{
          color: "white",
        }}
      >
        {page + 1} of {numberPages}
      </p>

      <button disabled={isLoading} onClick={() => handlePage("INCREASING")}>
        next
      </button>
    </div>
  );
};

export default Buttons;
