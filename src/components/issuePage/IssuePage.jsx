import React from "react";
import { api } from "../../api";
import { IssuesContext } from "../../Store";
import { useAuth0 } from "../../utils/react-auth0-spa";
import { FETCH_ISSUES } from "../../utils/Types";

const IssuePage = () => {
  const { issuesState, issuesDispatch } = React.useContext(IssuesContext);
  const { getTokenSilently } = useAuth0();

  // testing context API call with JTW
  const callApi = async () => {
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

  console.log(issuesState);

  return (
    <>
      <h1>IssuePage</h1>
      <button onClick={callApi}>Ping API</button>
    </>
  );
};

export default IssuePage;
