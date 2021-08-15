import CartItem from "./CartItem";

//TODO: We could do this but its not readable
// type === "INCREASE_ITEM"
// ? cartItem.amount + 1
// : type === "DECREASE_ITEM"
// ? cartItem.amount - 1
// : cartItem.amount,

export const reducer = (state, action) => {
  function handleAmount(cart, type = "") {
    const newCartItem = cart
      .map((cartItem) => {
        if (cartItem.id === action.payload) {
          return {
            ...cartItem,
            amount: handleType(type, cartItem),
          };
        }
        return cartItem;
      })
      .filter((item) => item.amount !== 0);

    return newCartItem;
  }

  // this function is for checking the type of the dispatch
  function handleType(type, cartItem) {
    if (type === "INCREASE_ITEM") {
      return cartItem.amount + 1;
    } else if (type === "DECREASE_ITEM") {
      return cartItem.amount - 1;
    }
  }

  switch (action.type) {
    case "LOADING":
      return {
        ...state,
        loading: true,
      };

    case "FETCH_DATA_SUCCESS":
      return {
        ...state,
        cart: action.payload,
        loading: false,
      };

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
      let tempCart = handleAmount(state.cart, "INCREASE_ITEM");
      return {
        ...state,
        cart: tempCart,
      };

    case "DECREASE_ITEM":
      let newCart = handleAmount(state.cart, "DECREASE_ITEM");

      return {
        ...state,
        cart: newCart,
      };
    case "GET_TOTALS":
      let { total, amount } = state.cart.reduce(
        (cartTotal, cartItem) => {
          const { price, amount } = cartItem;
          const itemTotal = price * amount;

          cartTotal.total += itemTotal;
          cartTotal.amount += amount;

          return cartTotal;
        },
        {
          total: 0,
          amount: 0,
        }
      );

      total = parseFloat(total.toFixed(2));

      return {
        ...state,
        total,
        amount,
      };

    default:
      return {
        ...state,
      };
  }
};
