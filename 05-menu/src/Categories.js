import React from "react";

const Categories = ({ categories, filterMenu }) => {
  return (
    <div className="btn-container">
      {categories?.map((category, index) => (
        <button
          key={index}
          type="button"
          className="filter-btn"
          onClick={() => filterMenu(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default Categories;
