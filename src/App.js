import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchAllMovies, generateMovie } from "./store/movies";
import MovieCard from "./MovieCard";

class App extends Component {
  constructor() {
    super();
  }
  componentDidMount() {
    this.props.fetchMovies();
  }
  render() {
    const movies = this.props.movies || [];
    const { generateMovie } = this.props;
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
            return <MovieCard key={movie.id} movie={movie} />;
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
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
