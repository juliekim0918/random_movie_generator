import { catchError, resetError } from "./error";

import axios from "axios";
const initialState = {
  movies: [],
  err: "",
};

const FETCH_ALL_MOVIES = "FETCH_ALL_MOVIES";
const GENERATE_MOVIE = "GENERATE_MOVIE";
const CATCH_ERROR = "CATCH_ERROR";

const _fetchAllMovies = (movies) => {
  return {
    type: FETCH_ALL_MOVIES,
    movies,
  };
};

const _generateMovie = (movie) => {
  return {
    type: GENERATE_MOVIE,
    movie,
  };
};

export const fetchAllMovies = () => {
  return async (dispatch) => {
    const { data: movies } = await axios.get("/api/movies");
    dispatch(_fetchAllMovies(movies));
  };
};

export const generateMovie = () => {
  return async (dispatch) => {
    const { data: movie } = await axios.post("/api/movies");
    dispatch(_generateMovie(movie));
  };
};

export const deleteMovie = (id) => {
  return async (dispatch) => {
    await axios.delete(`/api/movies/${id}`);
    const { data: movies } = await axios.get("/api/movies");
    dispatch(_fetchAllMovies(movies));
  };
};

export const updateRating = (movie, operator) => {
  return async (dispatch) => {
    const newRating =
      operator === "INCREMENT"
        ? { rating: movie.rating + 1 }
        : { rating: movie.rating - 1 };
    try {
      const response = await axios.put(`/api/movies/${movie.id}`, newRating);
      const { data: movies } = await axios.get("/api/movies");
      dispatch(_fetchAllMovies(movies));
      dispatch(resetError());
    } catch (error) {
      const errValidatorKey = error.response.data.key[0];
      const movieId = movie.id;
      dispatch(catchError(errValidatorKey, movieId));
    }
  };
};

export default (state = [], action) => {
  switch (action.type) {
    case FETCH_ALL_MOVIES:
      return action.movies;
    case GENERATE_MOVIE:
      state = [...state];
      state.unshift(action.movie);
      return state;

    default:
      return state;
  }
};
