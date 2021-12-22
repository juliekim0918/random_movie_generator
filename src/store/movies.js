import axios from "axios";

const FETCH_ALL_MOVIES = "FETCH_ALL_MOVIES";

const _fetchAllMovies = (movies) => {
  return {
    type: FETCH_ALL_MOVIES,
    movies,
  };
};

export const fetchAllMovies = () => {
  return async (dispatch) => {
    const { data: movies } = await axios.get("/api/movies");
  };
};
