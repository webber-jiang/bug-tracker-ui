import _ from "lodash";

import { FETCH_PRIORITIES, FETCH_PRIORITY_BY_ID } from "../utils/Types";
import { Action } from "../common/interfaces";

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface PrioritiesInitialState {}
export const prioritiesInitialState: PrioritiesInitialState = {};

export const PrioritiesReducer = (
  state: PrioritiesInitialState = prioritiesInitialState,
  action: Action
): object => {
  switch (action.type) {
    case FETCH_PRIORITY_BY_ID:
      return { ...state, [action.payload.priorityId]: action.payload };
    case FETCH_PRIORITIES:
      return { ...state, ..._.mapKeys(action.payload, "issueId") };
    default:
      return state;
  }
};
