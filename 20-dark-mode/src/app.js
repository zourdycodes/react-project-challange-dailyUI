import React, { useState, useEffect } from "react";
import data from "./data";
import Article from "./Article";

export const App = () => {
  const [theme, setTheme] = useState("light-theme");

  const toggleTheme = () => {
    if (theme === "light-theme") {
      setTheme("dark-theme");
    } else {
      setTheme("light-theme");
    }
  };

  useEffect(() => {
    document.documentElement.className = theme;
  }, [theme]);

  return (
    <main>
      <nav>
        <div className="nav-center">
          <h1>overreacted</h1>
          <button className="btn" onClick={toggleTheme}>
            toggle
          </button>
        </div>
      </nav>

      <section className="articles">
        {data?.map((data, index) => {
          return <Article key={index} {...data} />;
        })}
      </section>
    </main>
  );
};
