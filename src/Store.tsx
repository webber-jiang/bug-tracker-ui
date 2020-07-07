import React, { createContext, useReducer } from "react";
import {
  commentsInitialState,
  commentsReducer,
} from "./reducers/CommentsReducer";
import {
  issuesInitialState,
  issuesReducer,
  IssuesInitialState,
} from "./reducers/IssuesReducer";
import {
  projectsInitialState,
  projectsReducer,
  ProjectsInitialState,
} from "./reducers/ProjectsReducer";

export const CommentsContext = createContext({});
export const IssuesContext = createContext<{
  issuesState: IssuesInitialState;
  issuesDispatch: any;
}>({ issuesState: issuesInitialState, issuesDispatch: () => null });
export const ProjectsContext = React.createContext<{
  projectsState: ProjectsInitialState;
  projectsDispatch: any;
}>({ projectsState: projectsInitialState, projectsDispatch: () => null });

interface Children {
  children: JSX.Element;
}

export function StoreProvider({ children }: Children): JSX.Element {
  const [commentsState, commentsDispatch] = useReducer(
    commentsReducer,
    commentsInitialState
  );
  const [issuesState, issuesDispatch] = useReducer(
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
