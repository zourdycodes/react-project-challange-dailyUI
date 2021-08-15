import CartItem from "./CartItem";

export const reducer = (state, action) => {
  switch (action.type) {
    case "CLEAR_CART":
      return {
        ...state,
        cart: [],
      };

    case "REMOVE_SINGLE_ITEM":
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload),
      };

    case "INCREASE_ITEM":
      let tempCart = state.cart.map((cartItem) => {
        if (cartItem.id === action.payload) {
          return {
            ...cartItem,
            amount: cartItem.amount + 1,
          };
        }
        return cartItem;
      });
      return {
        ...state,
        cart: tempCart,
      };

    case "DECREASE_ITEM":
      let newCart = state.cart
        .map((cartItem) => {
          if (cartItem.id === action.payload) {
            return {
              ...cartItem,
              amount: cartItem.amount - 1,
            };
          }
          return cartItem;
        })
        .filter((item) => item.amount !== 0);

      return {
        ...state,
        cart: newCart,
      };

    default:
      return {
        ...state,
      };
  }
};
