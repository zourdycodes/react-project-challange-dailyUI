import React, { useState, useContext, useEffect } from "react";

export const API_ENDPOINT = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_MOVIE_API_KEY}`;

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState({
    show: false,
    msg: "",
  });
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState("jackass");

  // fetch the API
  const fetchMovies = async (url) => {
    setIsLoading(true);

    try {
      const response = await fetch(url);

      // error handliing
      if (!response.ok && response.status >= 400 && response.status <= 503) {
        return setError({
          show: true,
          msg: "Sorry, the server is not fetching your data, check your connection or wait for a few second!",
        });
      }

      const data = await response.json();

      if (data.Response === "True") {
        setMovies(data.Search);
        setError({ show: false, msg: "" });
      } else {
        setError({ show: true, msg: data.Error });
      }

      setIsLoading(false);
    } catch (err) {
      setIsLoading((isLoading) => !isLoading);
      throw new Error(err);
    }
  };

  useEffect(() => {
    fetchMovies(`${API_ENDPOINT}&s=${query}`);
  }, [query]);

  return (
    <AppContext.Provider
      value={{
        isLoading,
        error,
        movies,
        query,
        setQuery,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
