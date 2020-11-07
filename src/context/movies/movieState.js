import React, { useReducer } from "react";
import axios from "axios";
import MovieContext from "./movieContext";
import { MovieReducers } from "./movieReducer";
import {
  GET_MOVIES,
  SET_LOADING,
  GET_MOVIE,
  FILTER_MOVIES,
  CLEAR_FILTER,
} from "../types";

const MovieState = (props) => {
  const initialState = {
    movies: [],
    movie: {},
    filtered: null,
    loading: false,
  };

  const [state, dispatch] = useReducer(MovieReducers, initialState);

  // Get Movies
  const getMovies = async () => {
    setLoading();

    const { data } = await axios.get(
      `https://api.themoviedb.org/3/movie/top_rated?api_key=8305d069f496f8a6dff57ba5251b5ebf&language=en-US&page=1`
    );
    // const res = await axios.get(
    //   `https://api.themoviedb.org/3/movie/724089?api_key=8305d069f496f8a6dff57ba5251b5ebf&language=en-US`
    // );

    dispatch({
      type: GET_MOVIES,
      payload: data,
    });
  };

  // Get Movie
  const getMovie = async (id) => {
    setLoading();

    const { data } = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}?api_key=8305d069f496f8a6dff57ba5251b5ebf&language=en-US`
    );

    dispatch({
      type: GET_MOVIE,
      payload: data,
    });
  };

  // Set Loading
  const setLoading = () => dispatch({ type: SET_LOADING });

  // Filter Contacts
  const filterContacts = (text) => {
    dispatch({ type: FILTER_MOVIES, payload: text });
  };

  // Clear Filter
  const clearFilter = () => {
    dispatch({ type: CLEAR_FILTER });
  };

  return (
    <MovieContext.Provider
      value={{
        movies: state.movies,
        movie: state.movie,
        loading: state.loading,
        getMovies,
        getMovie,
        filtered: state.filtered,
        filterContacts,
        clearFilter,
      }}
    >
      {props.children}
    </MovieContext.Provider>
  );
};

export default MovieState;
