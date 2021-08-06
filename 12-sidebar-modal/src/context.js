import React, { useState, useContext, createContext } from "react";

export const ModalContext = createContext();

export const ContextProvider = (props) => {
  const [showSidebar, setShowSidebar] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <ModalContext.Provider
      value={{
        showSidebar,
        setShowSidebar,
        isModalOpen,
        setIsModalOpen,
      }}
    >
      {props.children}
    </ModalContext.Provider>
  );
};
