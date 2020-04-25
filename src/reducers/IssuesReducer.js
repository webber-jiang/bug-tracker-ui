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

export const issuesReducer = (IssuesInitialState, action) => {
  switch (action.type) {
    case FETCH_ISSUES:
      return { ...IssuesInitialState, issues: action.payload };
    case FETCH_ISSUE_BY_ID:
      return { ...IssuesInitialState, issue: action.payload };
    case FETCH_ISSUES_BY_PROJECT_ID:
      return { ...IssuesInitialState, issuesByProject: action.payload };
    case CREATE_ISSUE:
    case UPDATE_ISSUE:
      return { ...IssuesInitialState, updateIssue: action.payload };
    case DELETE_ISSUE:
      return { ...IssuesInitialState };
    default:
      return IssuesInitialState;
  }
};
