import React from "react";
import {
  commentsInitialState,
  commentsReducer,
} from "./reducers/CommentsReducer";
import { issuesInitialState, issuesReducer } from "./reducers/IssuesReducer";

export const CommentsContext = React.createContext();
export const IssuesContext = React.createContext();

export function StoreProvider({ children }) {
  const [commentsState, commentsDispatch] = React.useReducer(
    commentsReducer,
    commentsInitialState
  );
  const [issuesState, issuesDispatch] = React.useReducer(
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
