import React, { Component } from "react";
import { connect } from "react-redux";
import { deleteMovie, updateRating } from "./store/movies";
const DECREMENT = "DECREMENT";
const INCREMENT = "INCREMENT";
import ErrorMsg from "./ErrorMsg";
import { X, Star, ChevronUp, ChevronDown } from "react-feather";

const MovieCard = ({ movie, deleteMovie, updateRating }) => {
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
};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteMovie: (id) => {
      dispatch(deleteMovie(id));
    },
    updateRating: (movie, operator) => {
      dispatch(updateRating(movie, operator));
    },
  };
};

export default connect(null, mapDispatchToProps)(MovieCard);
