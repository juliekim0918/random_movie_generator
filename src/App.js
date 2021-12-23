import React, { Component } from "react";
import { connect } from "react-redux";
import {
  fetchAllMovies,
  generateMovie,
  deleteMovie,
  updateRating,
} from "./store/movies";
const DECREMENT = "DECREMENT";
const INCREMENT = "INCREMENT";
import ErrorMsg from "./ErrorMsg";
import { X, Star, ChevronUp, ChevronDown, AlertCircle } from "react-feather";

class App extends Component {
  constructor() {
    super();
  }
  componentDidMount() {
    this.props.fetchMovies();
  }
  render() {
    const movies = this.props.movies || [];
    const { generateMovie, deleteMovie, updateRating } = this.props;
    return (
      <div className="container m-auto my-10 md:w-10/12 shadow-lg rounded-md p-10 bg-sky-200">
        <div className="container flex flex-col">
          <h1 className="font-serif text-6xl ">
            Welcome to my random movie generator
          </h1>
          <p className=" text-xl font-semibold py-4">
            Here are all the movies that you can see:
          </p>
          <button
            onClick={() => generateMovie()}
            className="w-3/12 border-sky-700 border-2 p-3 bg-sky-700 text-white font-semibold text-l rounded-md"
          >
            Generate random movie
          </button>
        </div>
        <div className="my-7 grid grid-cols-2 gap-7">
          {movies.map((movie) => {
            return (
              <div
                key={movie.id}
                className=" bg-white rounded-md flex flex-col justify-center p-8 border-l-8 border-sky-700"
              >
                <div className="flex justify-between space-x-3">
                  <h1 className="font-serif text-3xl">{movie.title}</h1>
                  <button
                    onClick={() => deleteMovie(movie.id)}
                    className="bg-light-grey rounded-md max-w-max py-2 px-3 h-fit"
                  >
                    <X size={15} />
                  </button>
                </div>
                <ErrorMsg movie={movie} />
                <div className="my-2 text-xl flex gap-2 items-center space-x-3">
                  <div className="flex flex-row gap-2 items-center">
                    <Star fill="#e9c46a" stroke="#e9c46a" />
                    <div>{movie.rating}</div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <button
                      onClick={() => updateRating(movie, INCREMENT)}
                      className="bg-light-grey rounded-md max-w-max p-2 h-fit"
                    >
                      <ChevronUp size={15} />
                    </button>

                    <button
                      onClick={() => updateRating(movie, DECREMENT)}
                      className="bg-light-grey rounded-md max-w-max p-2  h-fit"
                    >
                      <ChevronDown size={15} />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ movies, err }) => {
  return { movies, err };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchMovies: () => {
      dispatch(fetchAllMovies());
    },
    generateMovie: () => {
      dispatch(generateMovie());
    },
    deleteMovie: (id) => {
      dispatch(deleteMovie(id));
    },
    updateRating: (movie, operator) => {
      dispatch(updateRating(movie, operator));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
