// src/components/Dashboard/Sidebar.js
import React from 'react';
import { Nav, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

function Sidebar({ isOpen, closeSidebar }) {
  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
      <Button variant="outline-light" onClick={closeSidebar} className="close-btn">
        ×
      </Button>
      <Nav className="flex-column">
        <Nav.Link as={NavLink} to="/ecommerce" className="text-white">
          E-commerce Order
        </Nav.Link>
        <Nav.Link as={NavLink} to="/chat" className="text-white">
          Chat
        </Nav.Link>
        <Nav.Link as={NavLink} to="/client" className="text-white">
          Client
        </Nav.Link>
        <Nav.Link as={NavLink} to="/intervene" className="text-white">
          Intervene
        </Nav.Link>
        <Nav.Link as={NavLink} to="/botbuilder" className="text-white">
          Bot Builder
        </Nav.Link>
      </Nav>
    </div>
  );
}

export default Sidebar;
