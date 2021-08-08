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

  const openSubMenu = () => {
    setIsSubMenuOpen((isSidebarOpen) => !isSidebarOpen);
  };

  const closeSubMenu = () => {
    setIsSubMenuOpen(false);
  };

  return (
    <>
      <AppContext.Provider
        value={{
          openSidebar,
          closeSidebar,
          openSubMenu,
          closeSubMenu,
          isSidebarOpen,
          isSubMenuOpen,
        }}
      >
        {children}
      </AppContext.Provider>
    </>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
