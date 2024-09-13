// src/components/Chat/UserList.js
import React, { useState } from 'react';
import { ListGroup, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Chat.css'; // Ensure this CSS file is correctly linked
import { FaSearch } from 'react-icons/fa';
import Select from 'react-select';

// Extended users data
const users = [
  { id: 1, name: 'Ravi Kumar', profileImg: 'https://via.placeholder.com/40', lastMessage: 'Hey there!', lastMessageTime: new Date(Date.now() - 6000000).toISOString(), online: true },
  { id: 2, name: 'Aarti Sharma', profileImg: 'https://via.placeholder.com/40', lastMessage: 'See you later!', lastMessageTime: new Date(Date.now() - 36000000).toISOString(), online: false },
  { id: 3, name: 'Vikram Singh', profileImg: 'https://via.placeholder.com/40', lastMessage: 'What’s up?', lastMessageTime: new Date(Date.now() - 144000000).toISOString(), online: true },
  { id: 4, name: 'Meera Patel', profileImg: 'https://via.placeholder.com/40', lastMessage: 'Good morning!', lastMessageTime: new Date(Date.now() - 86400000).toISOString(), online: false },
  { id: 5, name: 'Rajesh Kumar', profileImg: 'https://via.placeholder.com/40', lastMessage: 'How are you?', lastMessageTime: new Date(Date.now() - 30000000).toISOString(), online: true },
  { id: 6, name: 'Sanya Singh', profileImg: 'https://via.placeholder.com/40', lastMessage: 'Long time!', lastMessageTime: new Date(Date.now() - 180000000).toISOString(), online: false },
  { id: 7, name: 'Priya Sharma', profileImg: 'https://via.placeholder.com/40', lastMessage: 'Hello!', lastMessageTime: new Date(Date.now() - 72000000).toISOString(), online: true },
  { id: 8, name: 'Amit Singh', profileImg: 'https://via.placeholder.com/40', lastMessage: 'See you soon!', lastMessageTime: new Date(Date.now() - 432000000).toISOString(), online: false },
  { id: 9, name: 'Nisha Patel', profileImg: 'https://via.placeholder.com/40', lastMessage: 'Catch up later?', lastMessageTime: new Date(Date.now() - 60000000).toISOString(), online: true },
  { id: 10, name: 'Rohit Kumar', profileImg: 'https://via.placeholder.com/40', lastMessage: 'Busy day!', lastMessageTime: new Date(Date.now() - 108000000).toISOString(), online: false },
  { id: 11, name: 'Neha Kapoor', profileImg: 'https://via.placeholder.com/40', lastMessage: 'Just checking in!', lastMessageTime: new Date(Date.now() - 120000000).toISOString(), online: true },
  { id: 12, name: 'Arjun Patel', profileImg: 'https://via.placeholder.com/40', lastMessage: 'How’s it going?', lastMessageTime: new Date(Date.now() - 360000000).toISOString(), online: false },
  { id: 13, name: 'Tanu Sharma', profileImg: 'https://via.placeholder.com/40', lastMessage: 'Good evening!', lastMessageTime: new Date(Date.now() - 150000000).toISOString(), online: true },
  { id: 14, name: 'Deepak Sharma', profileImg: 'https://via.placeholder.com/40', lastMessage: 'What’s the update?', lastMessageTime: new Date(Date.now() - 250000000).toISOString(), online: false },
  { id: 15, name: 'Sunita Kumar', profileImg: 'https://via.placeholder.com/40', lastMessage: 'Can we talk?', lastMessageTime: new Date(Date.now() - 300000000).toISOString(), online: true },
  { id: 16, name: 'Manoj Singh', profileImg: 'https://via.placeholder.com/40', lastMessage: 'Let’s meet!', lastMessageTime: new Date(Date.now() - 60000000).toISOString(), online: false },
  { id: 17, name: 'Ritika Singh', profileImg: 'https://via.placeholder.com/40', lastMessage: 'Call me back!', lastMessageTime: new Date(Date.now() - 360000000).toISOString(), online: true },
  { id: 18, name: 'Akash Sharma', profileImg: 'https://via.placeholder.com/40', lastMessage: 'Let’s catch up!', lastMessageTime: new Date(Date.now() - 120000000).toISOString(), online: false },
  { id: 19, name: 'Kiran Patel', profileImg: 'https://via.placeholder.com/40', lastMessage: 'Meeting scheduled!', lastMessageTime: new Date(Date.now() - 60000000).toISOString(), online: true },
  { id: 20, name: 'Vijay Kumar', profileImg: 'https://via.placeholder.com/40', lastMessage: 'See you at 5!', lastMessageTime: new Date(Date.now() - 108000000).toISOString(), online: false },
];

function UserList({ onSelectUser }) {
  const [activeTab, setActiveTab] = useState('Active');
  const [showSearch, setShowSearch] = useState(false);

  const handleTabSelect = (tab) => {
    setActiveTab(tab);
  };

  const handleSearchClick = () => {
    setShowSearch(!showSearch);
  };

  const filteredUsers = users.filter(user =>
    (activeTab === 'Active' && user.online) || (activeTab === 'History' && !user.online)
  );

  const getTimeElapsed = (lastMessageTime) => {
    const now = new Date();
    const messageDate = new Date(lastMessageTime);
    const elapsedMinutes = Math.floor((now - messageDate) / 60000);
    
    if (elapsedMinutes < 60) {
      return `${elapsedMinutes} minute${elapsedMinutes > 1 ? 's' : ''} ago`;
    } else if (elapsedMinutes < 1440) {
      const elapsedHours = Math.floor(elapsedMinutes / 60);
      return `${elapsedHours} hour${elapsedHours > 1 ? 's' : ''} ago`;
    } else {
      return 'Yesterday';
    }
  };

  const userOptions = users.map(user => ({
    value: user.id,
    label: user.name,
  }));

  return (
    <div className="user-list">
      <div className="user-list-header">
        <h5 className="user-list-title">UserList</h5>
        <FaSearch className="search-icon" onClick={handleSearchClick} />
        {showSearch && (
          <div className="search-dropdown">
            <Select
              options={userOptions}
              placeholder="Search for a user..."
              onChange={(selectedOption) => {
                const selectedUser = users.find(user => user.id === selectedOption.value);
                onSelectUser(selectedUser);
              }}
            />
          </div>
        )}
      </div>
      <Nav variant="tabs" defaultActiveKey="Active" className="mb-3">
        <Nav.Item>
          <Nav.Link 
            eventKey="Active" 
            onClick={() => handleTabSelect('Active')} 
            className={activeTab === 'Active' ? 'active-tab' : ''}
          >
            Active
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link 
            eventKey="History" 
            onClick={() => handleTabSelect('History')} 
            className={activeTab === 'History' ? 'active-tab' : ''}
          >
            History
          </Nav.Link>
        </Nav.Item>
      </Nav>
      <ListGroup>
        {filteredUsers.map(user => (
          <ListGroup.Item
            key={user.id}
            action
            onClick={() => onSelectUser(user)}
            className="cursor-pointer d-flex align-items-center user-list-item"
          >
            <div className="profile-img-wrapper">
              <img 
                src={user.profileImg} 
                alt={user.name} 
                className="profile-img"
              />
              <div className={`status-indicator ${user.online ? 'online' : 'offline'}`}></div>
            </div>
            <div className="ml-2 d-flex flex-grow-1 align-items-center">
              <div className="user-info">
                <div className="user-name">{user.name}</div>
                <div className="user-status">
                  <span className="last-message">{user.lastMessage}</span>
                  <div className="time-elapsed">{getTimeElapsed(user.lastMessageTime)}</div>
                </div>
              </div>
            </div>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
}

export default UserList;
