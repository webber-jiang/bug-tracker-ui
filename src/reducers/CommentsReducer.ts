import { FETCH_COMMENTS } from "../utils/Types";

export const commentsInitialState = { comments: [], comment: "" };

export const commentsReducer = (
  state: any = commentsInitialState,
  action: any
): any => {
  switch (action.type) {
    case FETCH_COMMENTS:
      return { ...state, comments: action.payload };
    default:
      return state;
  }
};
