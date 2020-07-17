import _ from "lodash";

import { FETCH_PROJECTS } from "../utils/Types";

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface ProjectsInitialState {}
export const projectsInitialState: ProjectsInitialState = {};
interface Action {
  type: string;
  payload: any;
}

export const projectsReducer = (
  state: ProjectsInitialState = projectsInitialState,
  action: Action
): object => {
  switch (action.type) {
    case FETCH_PROJECTS:
      return { ...state, ..._.mapKeys(action.payload, "projectId") };
    default:
      return state;
  }
};
