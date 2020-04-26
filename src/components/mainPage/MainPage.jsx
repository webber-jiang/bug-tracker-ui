import React from "react";
import { api } from "../../api";
import { CommentsContext } from "../../Store";
import { FETCH_COMMENTS } from "../../utils/Types";

const MainPage = () => {
  const { commentsState, commentsDispatch } = React.useContext(CommentsContext);

  // testing context API call
  const fetchComments = async () => {
    try {
      const response = await api.get("comments");
      return commentsDispatch({
        type: FETCH_COMMENTS,
        payload: response.data,
      });
    } catch (error) {
      console.error(error);
    }
  };

  console.log(commentsState);

  return (
    <>
      <div>MainPage</div>
      <button onClick={fetchComments}>Fetch comments</button>
    </>
  );
};

export default MainPage;
