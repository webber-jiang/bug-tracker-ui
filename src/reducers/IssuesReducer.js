import {
  FETCH_ISSUES,
  FETCH_ISSUE_BY_ID,
  FETCH_ISSUES_BY_PROJECT_ID,
  CREATE_ISSUE,
  UPDATE_ISSUE,
  DELETE_ISSUE,
} from "../utils/Types";

export const issuesInitialState = {
  issues: [],
  issue: {},
  issuesByProject: [],
  updateIssue: {},
};

export const issuesReducer = (state = issuesInitialState, action) => {
  switch (action.type) {
    case FETCH_ISSUES:
      return { ...state, issues: action.payload };
    case FETCH_ISSUE_BY_ID:
      return { ...state, issue: action.payload };
    case FETCH_ISSUES_BY_PROJECT_ID:
      return { ...state, issuesByProject: action.payload };
    case CREATE_ISSUE:
      return { ...state };
    case UPDATE_ISSUE:
      return { ...state, updateIssue: action.payload };
    case DELETE_ISSUE:
      return { ...state };
    default:
      return state;
  }
};
