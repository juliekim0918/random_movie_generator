import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import loggerMiddleware from "redux-logger";

const reducer = (state = {}, action) => {
  switch (action.type) {
    case "THIS":
      break;

    default:
      return state;
  }
};

const store = createStore(reducer, applyMiddleware(thunk, loggerMiddleware));

export default store;
