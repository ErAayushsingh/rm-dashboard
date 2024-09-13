// src/components/Dashboard/Navbar.js
import React from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../../App.css'

function CustomNavbar({ toggleSidebar }) {
  return (
    <Navbar className='nav-bar' expand="lg" fixed="top">
      <Button variant="outline-light text-light" onClick={toggleSidebar} className="me-2">
        ☰
      </Button>
      <Navbar.Brand as={Link} className='text-light' to="/">Dashboard</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link as={Link} className='text-light' to="/ecommerce">E-commerce Order</Nav.Link>
          <Nav.Link as={Link} className='text-light' to="/chat">Chat</Nav.Link>
          <Nav.Link as={Link} className='text-light' to="/client">Client</Nav.Link>
          <Nav.Link as={Link} className='text-light' to="/intervene">Intervene</Nav.Link>
          <Nav.Link as={Link} className='text-light' to="/botbuilder">Bot Builder</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default CustomNavbar;
