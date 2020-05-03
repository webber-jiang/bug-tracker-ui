import React from "react";
import {
  commentsInitialState,
  commentsReducer,
} from "./reducers/CommentsReducer";
import { issuesInitialState, issuesReducer } from "./reducers/IssuesReducer";
import {
  projectsInitialState,
  projectsReducer,
} from "./reducers/ProjectsReducer";

export const CommentsContext = React.createContext();
export const IssuesContext = React.createContext();
export const ProjectsContext = React.createContext();

export function StoreProvider({ children }) {
  const [commentsState, commentsDispatch] = React.useReducer(
    commentsReducer,
    commentsInitialState
  );
  const [issuesState, issuesDispatch] = React.useReducer(
    issuesReducer,
    issuesInitialState
  );
  const [projectsState, projectsDispatch] = React.useReducer(
    projectsReducer,
    projectsInitialState
  );

  return (
    <IssuesContext.Provider value={{ issuesState, issuesDispatch }}>
      <CommentsContext.Provider value={{ commentsState, commentsDispatch }}>
        <ProjectsContext.Provider value={{ projectsState, projectsDispatch }}>
          {children}
        </ProjectsContext.Provider>
      </CommentsContext.Provider>
    </IssuesContext.Provider>
  );
}
