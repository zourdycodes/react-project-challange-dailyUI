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

    default:
      return {
        ...state,
      };
  }
};
