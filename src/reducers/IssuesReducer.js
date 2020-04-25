import { FETCH_ISSUES } from "../utils/Types";

export const issuesInitialState = { issues: [], issue: "" };

export const issuesReducer = (IssuesInitialState, action) => {
  switch (action.type) {
    case FETCH_ISSUES:
      return { ...IssuesInitialState, issues: action.payload };
    default:
      return IssuesInitialState;
  }
};
