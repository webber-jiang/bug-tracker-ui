import _ from "lodash";

import { FETCH_STATUS, FETCH_STATUS_BY_ID } from "../utils/Types";
import Action from "./Action";

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface StatusInitialState {}
export const statusInitialState: StatusInitialState = {};

export const StatusReducer = (
  state: StatusInitialState = statusInitialState,
  action: Action
): object => {
  switch (action.type) {
    case FETCH_STATUS_BY_ID:
      return { ...state, [action.payload.statusId]: action.payload };
    case FETCH_STATUS:
      return { ...state, ..._.mapKeys(action.payload, "statusId") };
    default:
      return state;
  }
};
