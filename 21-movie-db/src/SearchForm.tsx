import React from "react";
import { useGlobalContext } from "./context";

const SearchForm: React.FC = () => {
  const { query, setQuery, error } = useGlobalContext();

  return (
    <form onSubmit={(e) => e.preventDefault()} className="search-form">
      <h2>Search Movies</h2>
      <input
        type="text"
        className="form-input"
        value={query}
        onChange={({ target }) => setQuery(target.value)}
      />
      {error.show && <div className="error">{error.msg}</div>}
    </form>
  );
};

export default SearchForm;
