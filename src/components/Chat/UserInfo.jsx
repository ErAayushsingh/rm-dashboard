// src/components/Chat/UserInfo.js
import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import './Chat.css'; // Ensure to create this CSS file for additional styling

function UserInfo({ user }) {
  return (
    <Card className="user-info-card">
      <Card.Header className="user-info-header">
        <div className="header-content">
          <img
            src={user?.profileImg || 'https://via.placeholder.com/60'}
            alt={user?.name || 'User'}
            className="user-profile-img"
          />
          <div className="user-info-text">
            <h5 className="user-info-title">{user ? user.name : 'Select a user'}</h5>
            <div className="user-info-subtitle">{user ? user.jobTitle : ''}</div>
          </div>
          <Button variant="outline-light" className="ml-auto">
            <FaEnvelope />
          </Button>
        </div>
      </Card.Header>
      <Card.Body>
        {user ? (
          <div className="user-info-details">
            <div className="info-item">
              <FaEnvelope className="info-icon" />
              <span className="info-text">{user.email || 'example@example.com'}</span>
            </div>
            <div className="info-item">
              <FaPhone className="info-icon" />
              <span className="info-text">{user.phone || '123-456-7890'}</span>
            </div>
            <div className="info-item">
              <FaMapMarkerAlt className="info-icon" />
              <span className="info-text">{user.address || 'Unknown location'}</span>
            </div>
          </div>
        ) : (
          <Card.Text>
            <p>Select a user to see more information</p>
          </Card.Text>
        )}
      </Card.Body>
    </Card>
  );
}

export default UserInfo;