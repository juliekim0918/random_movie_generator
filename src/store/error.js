const CATCH_ERROR = "CATCH_ERROR";
const RESET_ERROR = "RESET_ERROR";

export const catchError = (errKey, errMsg, id) => {
  return {
    type: CATCH_ERROR,
    errKey,
    errMsg,
    id,
  };
};

export const resetError = () => {
  return {
    type: RESET_ERROR,
  };
};

export default (state = { errKey: "", errMsg: "", id: -1 }, action) => {
  switch (action.type) {
    case CATCH_ERROR:
      const errKey = action.errKey;
      const errMsg = action.errMsg;
      const id = action.id;
      return { errKey, errMsg, id };
    case RESET_ERROR:
      return { errKey: "", errMsg: "", id: -1 };
    default:
      return state;
  }
};
