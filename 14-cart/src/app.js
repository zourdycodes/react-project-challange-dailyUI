import React from "react";
import { useGlobalContext } from "./context";

// components
import Navbar from "./Navbar";
import CartContainer from "./CartContainer";
// items

export const App = () => {
  const { loading, error } = useGlobalContext();

  if (error) {
    return (
      <div className="loading">
        <h1>
          Error fetching the data, check your connection or call the IT support
        </h1>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="loading">
        <h1>Loading...</h1>
      </div>
    );
  }

  return (
    <main>
      <Navbar />
      <CartContainer />
    </main>
  );
};
