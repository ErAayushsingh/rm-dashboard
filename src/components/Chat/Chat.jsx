// src/components/Chat/Chat.js
import React, { useState } from 'react';
import UserList from './UserList';
import ChatWindow from './ChatWindow';
import UserInfo from './UserInfo';
import './Chat.css';

function Chat() {
  const [selectedUser, setSelectedUser] = useState(null);

  return (
    <div className="chat-container d-flex mt-2">
      <div className="user-list">
        <UserList onSelectUser={setSelectedUser} />
      </div>
      <div className="chat-window">
        <ChatWindow user={selectedUser} />
      </div>
      <div className="user-info">
        <UserInfo user={selectedUser} />
      </div>
    </div>
  );
}

export default Chat;
