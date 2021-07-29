import React, { useState } from "react";
import Menu from "./Menu";
import Categories from "./Categories";
import items from "./data";

const allCategories = ["all", ...new Set(items.map((item) => item.category))];

export const App = () => {
  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState(allCategories);

  const filterMenu = (category) => {
    if (category === "all") {
      setMenuItems(items);
      return;
    }

    const filterData = items.filter((item) => item.category === category);
    return setMenuItems(filterData);
  };

  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>Our Menu</h2>
          <div className="underline"></div>
        </div>

        <Categories categories={categories} filterMenu={filterMenu} />
        <Menu items={menuItems} />
      </section>
    </main>
  );
};
