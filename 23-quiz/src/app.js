import React from "react";
import { useGlobalContext } from "./context";

import SetupForm from "./SetupForm";
import Loading from "./Loading";
import Modal from "./Modal";

export const App = () => {
  const { waiting, loading, questions, index, correct } = useGlobalContext();

  if (waiting) {
    return <SetupForm />;
  }

  if (loading) {
    return <Loading />;
  }

  return (
    <main>
      <h1>Quiz APP</h1>
    </main>
  );
};
