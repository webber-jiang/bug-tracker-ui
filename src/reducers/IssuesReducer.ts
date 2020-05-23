import _ from "lodash";

import {
  FETCH_ISSUE_BY_ID,
  FETCH_ISSUES_BY_PROJECT_ID,
  CREATE_ISSUE,
  UPDATE_ISSUE,
  DELETE_ISSUE,
} from "../utils/Types";

// export type Issue = {
//   closeDate: string | null;
//   description: string;
//   issueId: number;
//   lastEditDate: string | null;
//   priorityId: string;
//   projectId: number;
//   reportDate: string;
//   statusId: string;
//   title: string;
//   userId: number;
// };

// export interface IssuesInitialState {
//   issue: Issue;
//   issuesByProjectId: any;
//   updateIssue: Issue;
// }

// export const issuesInitialState: IssuesInitialState = {
//   issue: {
//     closeDate: "",
//     description: "",
//     issueId: 0,
//     lastEditDate: "",
//     priorityId: "",
//     projectId: 0,
//     reportDate: "",
//     statusId: "",
//     title: "",
//     userId: 0,
//   },
//   issuesByProjectId: {},
//   updateIssue: {
//     closeDate: "",
//     description: "",
//     issueId: 0,
//     lastEditDate: "",
//     priorityId: "",
//     projectId: 0,
//     reportDate: "",
//     statusId: "",
//     title: "",
//     userId: 0,
//   },
// };

// interface Action {
//   type: string;
//   payload: Issue;
// }

// // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
// export const issuesReducer = (
//   // eslint-disable-next-line @typescript-eslint/typedef
//   state:IssuesInitialState=issuesInitialState,
//   action:Action
// ):IssuesInitialState => {
//   switch (action.type) {
//     case FETCH_ISSUE_BY_ID:
//       return { ...state, issue: action.payload };
//     case FETCH_ISSUES_BY_PROJECT_ID:
//       return { ...state, issuesByProjectId: [action.payload] };
//     case CREATE_ISSUE:
//       return {
//         ...state,
//         issuesByProjectId: [...state.issuesByProjectId, action.payload],
//       };
//     case UPDATE_ISSUE:
//       return { ...state, updateIssue: action.payload };
//     case DELETE_ISSUE:
//       return {
//         ...state,
//         issuesByProjectId: [
//           ...state.issuesByProjectId.filter(
//             (issue: Issue) => issue.issueId !== action.payload.issueId
//           ),
//         ],
//       };
//     default:
//       return state;
//   }
// };

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type

export const issuesReducer = (state: any = {}, action: any): any => {
  switch (action.type) {
    case FETCH_ISSUE_BY_ID:
      return { ...state, [action.payload.issueId]: action.payload };
    case FETCH_ISSUES_BY_PROJECT_ID:
      return { ...state, ..._.mapKeys(action.payload, "issueId") };
    case CREATE_ISSUE:
      return {
        ...state,
        [action.payload.issueId]: action.payload,
      };
    case UPDATE_ISSUE:
      return { ...state, updateIssue: action.payload };
    case DELETE_ISSUE:
      return _.omit(state, action.payload);
    default:
      return state;
  }
};

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface IssuesInitialState {}
export const issuesInitialState: IssuesInitialState = {};
