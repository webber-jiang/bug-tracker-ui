import React from "react";
import api from "../../api";

const IssuePage = () => {
  const getIssues = async () => {
    return await api.get("/projects");
  };

  getIssues();
  return <div>Issue this is for testing</div>;
};

export default IssuePage;
