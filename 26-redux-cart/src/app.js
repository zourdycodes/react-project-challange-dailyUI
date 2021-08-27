import React from "react";
// components
import Navbar from "./components/Navbar";
import CartContainer from "./components/CartContainer";
// items
import cartItems from "./cart-items";
// redux stuff
import { reducer } from "./redux/reducer";
import { createStore } from "redux";
import { Provider } from "react-redux";

/**
 * * reducer => function that used to update store
 * * two arguments => state, action
 * * state => old-state/state before update
 * * action => what happened / what update
 * * return updated or old state
 */

// initial store
const initialStore = {
  cart: cartItems,
  total: 0,
  amount: 0,
};

const store = createStore(reducer, initialStore);

export const App = () => {
  // cart setup

  return (
    <Provider store={store}>
      <Navbar />
      <CartContainer />
    </Provider>
  );
};
