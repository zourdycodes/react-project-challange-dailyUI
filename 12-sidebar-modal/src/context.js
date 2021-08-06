import React, { useState, createContext } from "react";

export const AppContext = createContext();

export const ContextProvider = (props) => {
  const [showSidebar, setShowSidebar] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <AppContext.Provider
      value={{
        showSidebar,
        setShowSidebar,
        isModalOpen,
        setIsModalOpen,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};
