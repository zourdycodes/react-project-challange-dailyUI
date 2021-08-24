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

    case REMOVE_STORY:
      return {
        ...state,
        hits: state.hits.filter((news) => news.objectID !== action.payload),
      };

    case HANDLE_SEARCH:
      return {
        ...state,
        query: action.payload,
        page: 0,
      };

    case HANDLE_PAGE:
      if (action.payload === "INCREASING") {
        let nextPage = state.page + 1;

        if (nextPage > state.numberPages - 1) {
          nextPage = 0;
        }

        return {
          ...state,
          page: nextPage,
        };
      }
      if (action.payload === "DECREASING") {
        let prevPage = state.page - 1;

        if (prevPage < 0) {
          prevPage = state.numberPages - 1;
        }

        return {
          ...state,
          page: prevPage,
        };
      }
      break;

    default:
      return {
        ...state,
      };
  }
};
