import _ from "lodash";

import { FETCH_ROLES, FETCH_ROLE_BY_ID } from "../utils/Types";
import { Action } from "../common/interfaces";
// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface RolesInitialState {}
export const rolesInitialState: RolesInitialState = {};

export const RolesReducer = (
  state: RolesInitialState = rolesInitialState,
  action: Action
): object => {
  switch (action.type) {
    case FETCH_ROLE_BY_ID:
      return { ...state, [action.payload.roleId]: action.payload };
    case FETCH_ROLES:
      return { ...state, ..._.mapKeys(action.payload, "roleId") };
    default:
      return state;
  }
};
