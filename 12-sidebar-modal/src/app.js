import React from "react";
import Modal from "./Modal";
import Sidebar from "./Sidebar";
import Home from "./Home";

export const App = () => {
  return (
    <>
      <Home />
      <Modal />
      <Sidebar />
    </>
  );
};
