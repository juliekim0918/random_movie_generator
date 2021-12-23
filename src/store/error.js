const CATCH_ERROR = "CATCH_ERROR";
const RESET_ERROR = "RESET_ERROR";

export const catchError = (errKey, id) => {
  return {
    type: CATCH_ERROR,
    errKey,
    id,
  };
};

export const resetError = () => {
  return {
    type: RESET_ERROR,
  };
};

export default (state = { errKey: "", id: -1 }, action) => {
  switch (action.type) {
    case CATCH_ERROR:
      const errKey = action.errKey;
      const id = action.id;
      return { errKey, id };
    case RESET_ERROR:
      return { errKey: "", id: -1 };
    default:
      return state;
  }
};
