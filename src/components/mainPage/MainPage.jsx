import React from "react";
import { api } from "../../api";
import { CommentsContext } from "../../Store";

const MainPage = () => {
  const { commentsState, commentsDispatch } = React.useContext(CommentsContext);

  // testing context API call
  const callApi = async () => {
    try {
      const response = await api.get("comments");
      return commentsDispatch({
        type: "FETCH_COMMENTS",
        payload: response.data,
      });
    } catch (error) {
      console.error(error);
    }
  };

  React.useEffect(() => {
    callApi();
  });

  console.log(commentsState);

  return (
    <>
      <div>MainPage</div>
    </>
  );
};

export default MainPage;
