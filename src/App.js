// src/App.js
import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import CustomNavbar from './components/Dashboard/Navbar';
import Sidebar from './components/Dashboard/Sidebar';
import EcommerceOrder from './components/EcommerceOrder/EcommerceOrder';
import Chat from './components/Chat/Chat';
import Client from './components/Client/Client';
import Intervene from './components/Intervene/Intervene';
import BotBuilder from './components/BotBuilder/BotBuilder';
import './App.css';

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <div className="App">
      {/* Navbar */}
      <CustomNavbar toggleSidebar={toggleSidebar} />

      {/* Sidebar */}
      <Sidebar isOpen={isSidebarOpen} closeSidebar={closeSidebar} />

      {/* Main content area */}
      <Container fluid className="content">
        <Routes>
          <Route path="/ecommerce" element={<EcommerceOrder />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/client" element={<Client />} />
          <Route path="/intervene" element={<Intervene />} />
          <Route path="/botbuilder" element={<BotBuilder />} />
        </Routes>
      </Container>
    </div>
  );
}

export default App;
