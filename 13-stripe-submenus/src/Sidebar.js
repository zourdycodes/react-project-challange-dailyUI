import React from "react";
import { FaTimes } from "react-icons/fa";
import { subLinks } from "./data";

import { useGlobalContext } from "./context";

const Sidebar = () => {
  const { isSidebarOpen, closeSidebar } = useGlobalContext();
  return (
    <aside
      className={`${
        isSidebarOpen ? "sidebar-wrapper show" : "sidebar-wrapper"
      }`}
    >
      <div className="sidebar">
        <button onClick={closeSidebar} className="close-btn">
          <FaTimes />
        </button>

        <div className="sidebar-links">
          {subLinks?.map((item) => {
            const { id, page, links } = item;

            return (
              <article key={id}>
                <h4>{page}</h4>
                <div className="sidebar-sublinks">
                  {links.map((link, index) => {
                    const { label, icon, url } = link;

                    return (
                      <>
                        <a href={url} key={index}>
                          {icon} {label}
                        </a>
                      </>
                    );
                  })}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
