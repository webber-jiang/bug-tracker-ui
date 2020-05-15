import {
  FETCH_ISSUES,
  FETCH_ISSUE_BY_ID,
  FETCH_ISSUES_BY_PROJECT_ID,
  CREATE_ISSUE,
  UPDATE_ISSUE,
  DELETE_ISSUE,
} from "../utils/Types";

export type Issue = {
  closeDate: string | null;
  description: string;
  issueId: number;
  lastEditDate: string | null;
  priorityId: string;
  projectId: number;
  reportDate: string;
  statusId: string;
  title: string;
  userId: number;
};

export interface IssuesInitialState {
  issues: Issue[];
  issue: Issue;
  issuesByProjectId: Issue[];
  updateIssue: Issue;
}

export const issuesInitialState: IssuesInitialState = {
  issues: [],
  issue: {
    closeDate: "",
    description: "",
    issueId: 0,
    lastEditDate: "",
    priorityId: "",
    projectId: 0,
    reportDate: "",
    statusId: "",
    title: "",
    userId: 0,
  },
  issuesByProjectId: [],
  updateIssue: {
    closeDate: "",
    description: "",
    issueId: 0,
    lastEditDate: "",
    priorityId: "",
    projectId: 0,
    reportDate: "",
    statusId: "",
    title: "",
    userId: 0,
  },
};

// not in use
// interface IssueReducer {
//   state: IssuesInitialState;
//   action: {
//     type: string;
//     payload: Issue;
//   };
// }

interface Action {
  type: string;
  payload: Issue;
}

export const issuesReducer = (
  state: IssuesInitialState = issuesInitialState,
  action: Action
): IssuesInitialState => {
  switch (action.type) {
    case FETCH_ISSUES:
      return { ...state, issues: [action.payload] };
    case FETCH_ISSUE_BY_ID:
      return { ...state, issue: action.payload };
    case FETCH_ISSUES_BY_PROJECT_ID:
      return { ...state, issuesByProjectId: [action.payload] };
    case CREATE_ISSUE:
      return {
        ...state,
        issues: [...state.issues, action.payload],
        issuesByProjectId: [...state.issuesByProjectId, action.payload],
      };
    case UPDATE_ISSUE:
      return { ...state, updateIssue: action.payload };
    case DELETE_ISSUE:
      return {
        ...state,
        issues: [
          ...state.issues.filter(
            (issue: Issue) => issue.issueId !== action.payload.issueId
          ),
        ],
        issuesByProjectId: [
          ...state.issuesByProjectId.filter(
            (issue: Issue) => issue.issueId !== action.payload.issueId
          ),
        ],
      };
    default:
      return state;
  }
};
