import {
  GET_MOVIES,
  SET_LOADING,
  GET_MOVIE,
  FILTER_MOVIES,
  CLEAR_FILTER,
} from "../types";

export const MovieReducers = (state, action) => {
  switch (action.type) {
    case GET_MOVIES:
      return {
        ...state,
        movies: action.payload,
        loading: false,
      };
    case GET_MOVIE:
      return {
        ...state,
        movie: action.payload,
        loading: false,
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };

    case FILTER_MOVIES:
      return {
        ...state,
        filtered: state.movies.results.filter((movie) => {
          const regex = new RegExp(`${action.payload}`, "gi");
          return movie.title.match(regex);
        }),
      };
    case CLEAR_FILTER:
      return {
        ...state,
        filtered: null,
      };
    default:
      return state;
  }
};
