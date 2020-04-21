import React from "react";
import api from "../../api";
import { Link } from "react-router-dom";

const MainPage = () => {
  const callApi = async () => {
    return await api.get("/projects");
  };

  callApi();
  return (
    <div>
      MainPage
      <Link to="/issuePage">To issue page</Link>
    </div>
  );
};

export default MainPage;
