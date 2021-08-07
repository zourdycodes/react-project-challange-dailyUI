import React, { useState, useContext } from "react";
import { subLinks } from "./data";

export const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);

  const openSidebar = () => {
    setIsSidebarOpen((isSidebarOpen) => !isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  const openModal = () => {
    setIsSubMenuOpen((isSidebarOpen) => !isSidebarOpen);
  };

  const closeModal = () => {
    setIsSubMenuOpen(false);
  };

  return (
    <>
      <AppContext.Provider
        value={{
          openSidebar,
          closeSidebar,
          openModal,
          closeModal,
          isSidebarOpen,
          isSubMenuOpen,
        }}
      >
        {children}
      </AppContext.Provider>
    </>
  );
};
