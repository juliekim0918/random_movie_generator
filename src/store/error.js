const CATCH_ERROR = "CATCH_ERROR";
const RESET_ERROR = "RESET_ERROR";

export const catchError = (errMsg, id) => {
  return {
    type: CATCH_ERROR,
    errMsg,
    id,
  };
};

export const resetError = () => {
  return {
    type: RESET_ERROR,
  };
};

export default (state = { errMsg: "", id: -1 }, action) => {
  switch (action.type) {
    case CATCH_ERROR:
      const errMsg = action.errMsg;
      const id = action.id;
      return { errMsg, id };
    case RESET_ERROR:
      return { errMsg: "", id: -1 };
    default:
      return state;
  }
};
