import { FETCH_PROJECTS } from "../utils/Types";

export const projectsInitialState = {
  projects: [],
};

export const projectsReducer = (state = projectsInitialState, action) => {
  switch (action.type) {
    case FETCH_PROJECTS:
      return { ...state, projects: action.payload };
    default:
      return state;
  }
};
