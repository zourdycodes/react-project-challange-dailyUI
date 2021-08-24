import {
  SET_LOADING,
  SET_STORIES,
  REMOVE_STORY,
  HANDLE_PAGE,
  HANDLE_SEARCH,
} from "./actions";

export const reducer = (state, action) => {
  switch (action.type) {
    case SET_LOADING:
      return {
        ...state,
        isLoading: true,
      };

    case SET_STORIES:
      return {
        ...state,
        isLoading: false,
        hits: action.payload.hits,
        numberPages: action.payload.numberPages,
      };

    default:
      return {
        ...state,
      };
  }
};
