import { FETCH_COMMENTS } from "../utils/Types";

export const commentsInitialState = { comments: [], comment: "" };

export const commentsReducer = (state = commentsInitialState, action) => {
  switch (action.type) {
    case FETCH_COMMENTS:
      return { ...state, comments: action.payload };
    default:
      return state;
  }
};
