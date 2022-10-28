import React from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import LinkContainer from 'react-router-bootstrap/LinkContainer'

const NavBar = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home"> Weather </Navbar.Brand>
          <Nav className="me-auto">

            <LinkContainer to="/">
              <Nav.Link to="/">Home</Nav.Link>
            </LinkContainer>

            <LinkContainer to="/about">
              <Nav.Link to="/about">About</Nav.Link>
            </LinkContainer>

            <LinkContainer to="/404">
              <Nav.Link to="/404"> 404 </Nav.Link>
            </LinkContainer>

          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;
