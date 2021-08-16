import React, { useState, useContext, useEffect } from "react";
import { useCallback } from "react";

const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("a");
  const [cocktails, setCocktails] = useState([]);

  useEffect(() => {
    const fetchDrink = async () => {
      try {
        const response = await fetch(`${url}${searchTerm}`);

        if (!response.ok) {
          throw new Error("response status is not ok");
        }

        const data = await response.json();
        const { drinks } = data;

        if (drinks) {
          const newCocktails = drinks?.map((item) => {
            const { idDrink, strDrink, strDrinkThumb, strAlcoholic, strGlass } =
              item;

            return {
              id: idDrink,
              name: strDrink,
              image: strDrinkThumb,
              info: strAlcoholic,
              glass: strGlass,
            };
          });

          setCocktails(newCocktails);
        } else {
          setCocktails([]);
        }

        setLoading((loading) => !loading);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };

    fetchDrink();
  }, []);

  return (
    <AppContext.Provider
      value={{
        loading,
        setLoading,
        setSearchTerm,
        cocktails,
        searchTerm,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
