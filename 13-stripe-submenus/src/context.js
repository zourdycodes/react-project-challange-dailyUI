import React, { useState, useContext } from "react";
import { subLinks } from "./data";

export const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);
  const [location, setLocation] = useState({});
  const [page, setPage] = useState({ page: "", links: [] });

  const openSidebar = () => {
    setIsSidebarOpen((isSidebarOpen) => !isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  const openSubMenu = (text, coordinates) => {
    const page = subLinks.find((link) => link.page === text);

    setPage(page);

    setLocation(coordinates);
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
          location,
          page,
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
