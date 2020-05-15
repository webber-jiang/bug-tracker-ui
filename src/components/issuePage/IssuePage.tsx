import React from "react";
import { api } from "../../api";
import { IssuesContext } from "../../Store";
import { useAuth0 } from "../../utils/react-auth0-spa";
import {
  FETCH_ISSUES,
  FETCH_ISSUE_BY_ID,
  FETCH_ISSUES_BY_PROJECT_ID,
  CREATE_ISSUE,
  UPDATE_ISSUE,
  DELETE_ISSUE,
} from "../../utils/Types";
import { IssuesInitialState } from "../../reducers/IssuesReducer";

const IssuePage = (): JSX.Element => {
  const { issuesState, issuesDispatch } = React.useContext(IssuesContext);
  const { getTokenSilently } = useAuth0();

  const fetchIssues = async (): Promise<IssuesInitialState | undefined> => {
    try {
      const token = await getTokenSilently();
      const response = await api.get("issues", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return issuesDispatch({
        type: FETCH_ISSUES,
        payload: response.data,
      });
    } catch (error) {
      console.error(error);
    }
  };

  console.log(fetchIssues);

  const fetchIssueById = async (
    issue_id: number
  ): Promise<IssuesInitialState | undefined> => {
    try {
      const token = await getTokenSilently();
      const response = await api.get(`issues/${issue_id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return issuesDispatch({
        type: FETCH_ISSUE_BY_ID,
        payload: response.data,
      });
    } catch (error) {
      console.error(error);
    }
  };

  const fetchIssuesByProjectId = async (
    project_id: number
  ): Promise<IssuesInitialState | undefined> => {
    try {
      const token = await getTokenSilently();
      const response = await api.get(`issues/projects/${project_id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return issuesDispatch({
        type: FETCH_ISSUES_BY_PROJECT_ID,
        payload: response.data,
      });
    } catch (error) {
      console.error(error);
    }
  };

  const createIssue = async (): Promise<IssuesInitialState | undefined> => {
    const data = {
      project_id: 6,
      priority_id: "00",
      user_id: 5,
      status_id: "1",
      title: "Issue",
      description: "New Issue",
      report_date: "2004-10-19T08:23:54.000Z",
    };
    try {
      const token = await getTokenSilently();
      await api.post("issues", data, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      return issuesDispatch({
        type: CREATE_ISSUE,
        payload: data,
      });
    } catch (error) {
      console.error(error);
    }
  };

  const updateIssue = async (
    issue_id: number
  ): Promise<IssuesInitialState | undefined> => {
    const data = {
      priority_id: "01",
      status_id: "1",
      title: "webberjiang",
      description: "data security breach",
    };
    try {
      const token = await getTokenSilently();
      const response = await api.patch(`issues/${issue_id}`, data, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      return issuesDispatch({
        type: UPDATE_ISSUE,
        payload: response.data,
      });
    } catch (error) {
      console.error(error);
    }
  };

  const deleteIssue = async (
    issue_id: number
  ): Promise<IssuesInitialState | undefined> => {
    try {
      const token = await getTokenSilently();
      await api.delete(`issues/${issue_id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return issuesDispatch({
        type: DELETE_ISSUE,
        payload: issue_id,
      });
    } catch (error) {
      console.error(error);
    }
  };

  console.log(issuesState);

  return (
    <>
      <h1>IssuePage</h1>
      <button onClick={fetchIssues}>fetchIssues</button>
      <button
        onClick={(): Promise<IssuesInitialState | undefined> =>
          fetchIssueById(1)
        }
      >
        fetchIssueByIssueId
      </button>
      <button
        onClick={(): Promise<IssuesInitialState | undefined> =>
          fetchIssuesByProjectId(6)
        }
      >
        fetchIssuesByProjectId
      </button>
      <button onClick={createIssue}>createIssue</button>
      <button
        onClick={(): Promise<IssuesInitialState | undefined> => updateIssue(86)}
      >
        updateIssue
      </button>
      <button
        onClick={(): Promise<IssuesInitialState | undefined> => deleteIssue(87)}
      >
        deleteIssue
      </button>
    </>
  );
};

export default IssuePage;
