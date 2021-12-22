import React, { Component } from "react";
import { render } from "react-dom";
const root = document.querySelector("#root");
import App from "./App";
import { Provider } from "react-redux";
import store from "./store";

render(
  <Provider store={store}>
    <App />
  </Provider>,
  root
);
