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

export const CommentsContext = createContext({});
export const IssuesContext = createContext<{
  issuesState: IssuesInitialState;
  issuesDispatch: any;
}>({ issuesState: issuesInitialState, issuesDispatch: () => null });

export function StoreProvider({ children }: any): JSX.Element {
  const [commentsState, commentsDispatch] = useReducer(
    commentsReducer,
    commentsInitialState
  );
  const [issuesState, issuesDispatch] = useReducer(
    issuesReducer,
    issuesInitialState
  );

  return (
    <IssuesContext.Provider value={{ issuesState, issuesDispatch }}>
      <CommentsContext.Provider value={{ commentsState, commentsDispatch }}>
        {children}
      </CommentsContext.Provider>
    </IssuesContext.Provider>
  );
}
