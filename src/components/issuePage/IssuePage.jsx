import React from "react";
import api from "../../api";

const IssuePage = () => {
  const getIssues = async () => {
    return await api.get("/projects");
  };

  getIssues();
  return <div>Issuedfhgfhgfh</div>;
};

export default IssuePage;
