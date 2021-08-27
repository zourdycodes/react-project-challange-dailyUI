import { DECREASE, INCREASE, CLEAR_CART, REMOVE } from "./actions";

export const reducer = (state, action) => {
  function handleAmount(cart = [], type = "") {
    const newCartItem = cart
      .map((cartItem) => {
        if (cartItem.id === action.payload) {
          return {
            ...cartItem,
            amount: handleType(cartItem, type),
          };
        }
        return cartItem;
      })
      .filter((item) => item.amount !== 0);

    return newCartItem;
  }

  function handleType(cart, type) {
    if (type === INCREASE) {
      return cart.amount + 1;
    } else if (type === DECREASE) {
      return cart.amount - 1;
    }
  }

  switch (action.type) {
    case DECREASE:
      let TEMP_CART = handleAmount(state.cart, DECREASE);
      return {
        ...state,
        cart: TEMP_CART,
      };

    case INCREASE:
      let CART_TEMP = handleAmount(state.cart, INCREASE);
      return {
        ...state,
        cart: CART_TEMP,
      };

    case CLEAR_CART:
      return {
        ...state,
        cart: [],
      };

    case REMOVE:
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload.id),
      };

    default:
      return {
        ...state,
      };
  }
};
