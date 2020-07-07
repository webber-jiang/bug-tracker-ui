import React, { useEffect, useCallback } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import { Dropdown } from "semantic-ui-react";

import { useAuth0 } from "../../utils/react-auth0-spa";
import { ProjectsContext } from "../../Store";
import { api } from "../../api";
import { FETCH_PROJECTS } from "../../utils/Types";
import "./Navbar.css";

const NavBar = () => {
  const { projectsState, projectsDispatch } = React.useContext(ProjectsContext);
  const { getTokenSilently, user, isAuthenticated } = useAuth0();

  const fetchProjects = useCallback(async () => {
    const token = await getTokenSilently();
    try {
      const response = await api.get("projects", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return projectsDispatch({
        type: FETCH_PROJECTS,
        payload: response.data,
      });
    } catch (error) {
      console.error(error);
    }
  }, [getTokenSilently, projectsDispatch]);

  useEffect(() => {
    fetchProjects();
  }, [fetchProjects]);

  const renderIcon = () => {
    return (
      <Navbar.Brand>
        <span className="navbar-icon">
          <i className="fab fa-reddit" />
        </span>
      </Navbar.Brand>
    );
  };

  const renderSearch = () => {
    return (
      <Form inline className="navbar-search-form">
        <InputGroup className="mb-3 navbar-search-input">
          <FormControl placeholder="Search" />
          <InputGroup.Append>
            <Button variant="outline-secondary">
              <i className="fas fa-search" />
            </Button>
          </InputGroup.Append>
        </InputGroup>
      </Form>
    );
  };

  const renderProjectsDropdown = () => {
    return (
      <Dropdown text="Projects" className="navbar-projects-dropdown" inline>
        <Dropdown.Menu className="navbar-projects-dropdown-menu">
          {isAuthenticated ? (
            projectsState.projects.length === 0 ? (
              ""
            ) : (
              projectsState.projects.slice(0, 5).map((project) => {
                return (
                  <>
                    <Dropdown.Item
                      key={project.projectId}
                      text={project.projectName}
                    />
                  </>
                );
              })
            )
          ) : (
            <>
              <Dropdown.Item text="Project 1" />
              <Dropdown.Item text="This is a really looooooooooooong project name" />
              <Dropdown.Item text="Bug Tracker" />
            </>
          )}
        </Dropdown.Menu>
      </Dropdown>
    );
  };

  const renderPlaceholderDropdown = () => {
    return (
      <Dropdown
        text="Placeholder"
        className="navbar-placeholder-dropdown"
        inline
      >
        <Dropdown.Menu>
          <Dropdown.Item text="New" />
        </Dropdown.Menu>
      </Dropdown>
    );
  };

  const renderSettings = () => {
    return (
      <Dropdown
        text={<i className="fas fa-cog" />}
        inline
        icon=""
        className="navbar-settings"
      >
        <Dropdown.Menu fluid>
          <Dropdown.Item text="Setting 1" />
          <Dropdown.Item text="Setting 2" />
          <Dropdown.Item text="Setting 3" />
          <Dropdown.Item text="Setting 4" />
          <Dropdown.Item text="Setting 5" />
        </Dropdown.Menu>
      </Dropdown>
    );
  };

  const renderHelp = () => {
    return (
      <Dropdown
        text={<i className="fas fa-question-circle" />}
        inline
        icon=""
        className="navbar-help"
      >
        <Dropdown.Menu>
          <Dropdown.Item text="Get help" />
        </Dropdown.Menu>
      </Dropdown>
    );
  };

  const renderAvatar = () => {
    return isAuthenticated ? (
      <Dropdown
        text={
          <img
            src={user.picture}
            alt={`Avatar: ${user.name}`}
            className="navbar-avatar-icon"
          />
        }
        inline
        icon=""
        className="navbar-avatar-dropdown"
      >
        <Dropdown.Menu>
          <Dropdown.Item text="New" />
        </Dropdown.Menu>
      </Dropdown>
    ) : (
      <Dropdown
        text={<i className="fas fa-user-circle" />}
        inline
        icon=""
        className="navbar-avatar-icon-placeholder"
      >
        <Dropdown.Menu>
          <Dropdown.Item text="Profile" />
          <Dropdown.Item text="Preferences" />
          <Dropdown.Item text="Log out" />
        </Dropdown.Menu>
      </Dropdown>
    );
  };

  return (
    <Navbar bg="light" expand="lg">
      {renderIcon()}
      {renderSearch()}
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          {renderProjectsDropdown()}
          {renderPlaceholderDropdown()}
        </Nav>
        {renderSettings()}
        {renderHelp()}
        {renderAvatar()}
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
