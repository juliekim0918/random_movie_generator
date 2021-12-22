import React, { Component } from "react";
import { connect } from "superagent";

class App extends Component {
  constructor() {
    super();
  }
  componentDidMount() {}

  render() {
    return (
      <div>
        <h1>Welcome to my random movie generator</h1>
        <p>this is s another paragraph of tex</p>
        <button>Generate random movie</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return state;
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
