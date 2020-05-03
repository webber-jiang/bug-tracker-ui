import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import { Dropdown } from "semantic-ui-react";
import InputGroup from "react-bootstrap/InputGroup";

const NavBar = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#home">
        <span style={{ fontSize: 36, color: "black" }}>
          <i className="fab fa-reddit" />
        </span>
      </Navbar.Brand>
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
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Dropdown
            text="Projects"
            style={{ fontSize: 24, marginLeft: 20 }}
            inline
          >
            <Dropdown.Menu>
              <Dropdown.Item text="New" />
              <Dropdown.Item text="Open..." description="ctrl + o" />
              <Dropdown.Item text="Save as..." description="ctrl + s" />
              <Dropdown.Item text="Rename" description="ctrl + r" />
              <Dropdown.Item text="Make a copy" />
              <Dropdown.Item icon="folder" text="Move to folder" />
              <Dropdown.Item icon="trash" text="Move to trash" />
              <Dropdown.Divider />
              <Dropdown.Item text="Download As..." />
              <Dropdown.Item text="Publish To Web" />
              <Dropdown.Item text="E-mail Collaborators" />
            </Dropdown.Menu>
          </Dropdown>
          <Dropdown
            text="Placeholder"
            style={{ fontSize: 24, marginLeft: 30 }}
            inline
          >
            <Dropdown.Menu>
              <Dropdown.Item text="New" />
            </Dropdown.Menu>
          </Dropdown>
        </Nav>
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#link">Link</Nav.Link>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
