import { FETCH_COMMENTS } from "../utils/Types";

export const commentsInitialState = { comments: [], comment: "" };

export const commentsReducer = (CommentsInitialState, action) => {
  switch (action.type) {
    case FETCH_COMMENTS:
      return { ...CommentsInitialState, comments: action.payload };
    default:
      return CommentsInitialState;
  }
};
