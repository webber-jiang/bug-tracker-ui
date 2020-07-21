import _ from "lodash";

import {
  FETCH_USERISSUES,
  FETCH_USERISSUES_BY_USER_ID,
  FETCH_USERISSUES_BY_ISSUE_ID,
  FETCH_USERISSUE_BY_USER_AND_ISSUE_ID,
  ASSIGN_USER_TO_ISSUE,
  REMOVE_USER_FROM_ISSUE,
} from "../utils/Types";
import Action from "./Action";

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface UserIssuesInitialState {}
export const userIssuesInitialState: UserIssuesInitialState = {};

export const UserIssuesReducer = (
  state: UserIssuesInitialState = userIssuesInitialState,
  action: Action
): object => {
  switch (action.type) {
  }
};
