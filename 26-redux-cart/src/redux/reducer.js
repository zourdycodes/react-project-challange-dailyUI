import { DECREASE, INCREASE } from "./actions";

export const reducer = (state, action) => {
  console.log({ state, action });

  switch (action.type) {
    case DECREASE:
      return {
        ...state,
        count: state.count - 1,
      };
    case INCREASE:
      return {
        ...state,
        count: state.count + 1,
      };

    default:
      return {
        ...state,
      };
  }
};
