// src/components/Chat/ChatApp.js
import React, { useState } from 'react';
import './Style.css';
import OrderList from './OrderList';
import UserList from '../Chat/UserList';
import OrderDetails from './OrderDetails';

function ChatApp() {
  const [selectedOrder, setSelectedOrder] = useState(null);

  const handleSelectOrder = (order) => {
    setSelectedOrder(order);
  };

  return (
    <div className="chat-app">
      <div className="chat-sidebar">
        <UserList onSelectUser={() => { /* handle user selection */ }} />
        <OrderList onSelectOrder={handleSelectOrder} />
      </div>
      <div className="chat-main">
        <OrderDetails order={selectedOrder} />
      </div>
    </div>
  );
}

export default ChatApp;
