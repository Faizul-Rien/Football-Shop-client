import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
           <Navbar
      collapseOnSelect
      expand="lg"
      bg="light"
      sticky="top"
      variant="light"
    >
      <Container>
        <Navbar.Brand as={Link} to="/home">
         Football Universe
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="m-auto">
            <Nav.Link as={Link} to="/home">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/inventory">
              Inventory
            </Nav.Link>
            <Nav.Link as={Link} to="/manage">
              Manage Inventoy
            </Nav.Link>
            <Nav.Link as={Link} to="/manageItem">
              Manage Items
            </Nav.Link>
            <Nav.Link as={Link} to="/myItem">
              My Items
            </Nav.Link>
            <Nav.Link as={Link} to="/add">
              Add Items
            </Nav.Link>

            <Nav.Link as={Link} to="/blogs">
              Blogs
            </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link as={Link} to="/login">
              Login
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        </div>
    );
};

export default Header;