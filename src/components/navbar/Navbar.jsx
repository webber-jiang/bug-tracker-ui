import React, { useEffect, useCallback } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import { Dropdown } from "semantic-ui-react";
import InputGroup from "react-bootstrap/InputGroup";
import { useAuth0 } from "../../utils/react-auth0-spa";
import { ProjectsContext } from "../../Store";
import { api } from "../../api";
import { FETCH_PROJECTS } from "../../utils/Types";

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
      <Navbar.Brand href="#home">
        <span style={{ fontSize: 36, color: "black" }}>
          <i className="fab fa-reddit" />
        </span>
      </Navbar.Brand>
    );
  };

  const renderSearch = () => {
    return (
      <Form inline style={{ width: "20%", marginTop: 10 }}>
        <InputGroup className="mb-3" style={{ width: "100%" }}>
          <FormControl placeholder="Search" style={{ width: "100%" }} />
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
      <Dropdown text="Projects" style={{ fontSize: 24, marginLeft: 20 }} inline>
        <Dropdown.Menu>
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
            <Dropdown.Item text="New" />
          )}
        </Dropdown.Menu>
      </Dropdown>
    );
  };

  const renderPlaceholderDropdown = () => {
    return (
      <Dropdown
        text="Placeholder"
        style={{ fontSize: 24, marginLeft: 30 }}
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
        style={{ fontSize: 24 }}
      >
        <Dropdown.Menu>
          <Dropdown.Item text="New" />
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
        style={{ fontSize: 24 }}
      >
        <Dropdown.Menu>
          <Dropdown.Item text="New" />
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
            style={{ width: 30, borderRadius: 15 }}
          />
        }
        inline
        icon=""
        style={{ marginTop: 5 }}
      >
        icon="" style={{ marginTop: 5 }}>
        <Dropdown.Menu>
          <Dropdown.Item text="New" />
        </Dropdown.Menu>
      </Dropdown>
    ) : (
      <Dropdown>
        <Dropdown.Menu inline icon="" style={{ fontSize: 24 }}>
          <Dropdown.Item text="New" />
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
