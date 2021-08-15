import React, { useState, useContext, useReducer, useEffect } from "react";
import { reducer } from "./reducer";

const url = "https://course-api.com/react-useReducer-cart-project";
const AppContext = React.createContext();

const initialState = {
  loading: false,
  cart: [],
  total: 0,
  amount: 0,
  error: false,
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    dispatch({ type: "LOADING" });
    const fetchData = async () => {
      const response = await fetch(url);

      if (!response.ok && response.status >= 400 && response.status <= 500) {
        dispatch({ type: "ERROR_FETCH_FAILED" });
      }

      const products = await response.json();

      dispatch({ type: "FETCH_DATA_SUCCESS", payload: products });
    };

    fetchData();
  }, []);

  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" });
  };

  const removeSingleItem = (id) => {
    dispatch({ type: "REMOVE_SINGLE_ITEM", payload: id });
  };

  const increaseItem = (id) => {
    dispatch({ type: "INCREASE_ITEM", payload: id });
  };

  const decreaseItem = (id) => {
    dispatch({ type: "DECREASE_ITEM", payload: id });
  };

  useEffect(() => {
    dispatch({ type: "GET_TOTALS" });
  }, [state.cart]);

  return (
    <AppContext.Provider
      value={{
        cart: state.cart,
        amount: state.amount,
        loading: state.loading,
        total: state.total,
        error: state.error,
        clearCart,
        removeSingleItem,
        increaseItem,
        decreaseItem,
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
