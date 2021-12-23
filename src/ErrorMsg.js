import React, { Component } from "react";
import { connect } from "react-redux";
import { AlertCircle } from "react-feather";

class ErrorMsg extends Component {
  constructor() {
    super();
    this.state = {
      err: {
        errKey: "",
        id: 0,
      },
    };
  }

  componentDidMount() {
    this.setState({
      err: {
        errKey: this.props.err.errKey,
        id: this.props.err.id,
      },
    });
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.err !== this.props.err) {
      this.setState({
        err: {
          errKey: this.props.err.errKey,
          id: this.props.err.id,
        },
      });
    }
  }

  render() {
    const { movie, err } = this.props;
    const { errKey } = err;
    return (
      <div>
        {errKey && movie.id === err.id ? (
          <div className="flex px-3 my-2 py-2 space-x-2 rounded-md bg-red-300 w-fit">
            <AlertCircle />
            <div>
              {errKey === "max"
                ? "Oh no, your rating can't go above that!"
                : "Oh no, your rating can't go below that!"}
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    );
  }
}

const mapStateToProps = ({ err }) => {
  return {
    err,
  };
};

export default connect(mapStateToProps)(ErrorMsg);
