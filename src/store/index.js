import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import loggerMiddleware from "redux-logger";
import movies from "./movies";
import err from "./error";

const reducer = combineReducers({
  movies,
  err,
});

const store = createStore(reducer, applyMiddleware(thunk, loggerMiddleware));

export default store;
