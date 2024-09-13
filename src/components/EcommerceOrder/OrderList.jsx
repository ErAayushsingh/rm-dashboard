// src/components/Order/OrderList.js
import React, { useState } from 'react';
import { ListGroup, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Style.css'; // Ensure this CSS file is correctly linked
import { FaSearch } from 'react-icons/fa';
import Select from 'react-select';

// Sample orders data
const orders = [
  { id: 1, productName: 'Laptop', orderDetails: 'Dell Inspiron 15', orderDate: new Date(Date.now() - 6000000).toISOString(), status: 'Shipped' },
  { id: 2, productName: 'Smartphone', orderDetails: 'Samsung Galaxy S21', orderDate: new Date(Date.now() - 36000000).toISOString(), status: 'Delivered' },
  { id: 3, productName: 'Headphones', orderDetails: 'Sony WH-1000XM4', orderDate: new Date(Date.now() - 144000000).toISOString(), status: 'Processing' },
  // Add more orders as needed
];

function OrderList({ onSelectOrder }) {
  const [activeTab, setActiveTab] = useState('All');
  const [showSearch, setShowSearch] = useState(false);

  const handleTabSelect = (tab) => {
    setActiveTab(tab);
  };

  const handleSearchClick = () => {
    setShowSearch(!showSearch);
  };

  const filteredOrders = orders.filter(order =>
    (activeTab === 'All') || (activeTab === 'Shipped' && order.status === 'Shipped') ||
    (activeTab === 'Delivered' && order.status === 'Delivered') ||
    (activeTab === 'Processing' && order.status === 'Processing')
  );

  const getTimeElapsed = (orderDate) => {
    const now = new Date();
    const orderDateObj = new Date(orderDate);
    const elapsedMinutes = Math.floor((now - orderDateObj) / 60000);
    
    if (elapsedMinutes < 60) {
      return `${elapsedMinutes} minute${elapsedMinutes > 1 ? 's' : ''} ago`;
    } else if (elapsedMinutes < 1440) {
      const elapsedHours = Math.floor(elapsedMinutes / 60);
      return `${elapsedHours} hour${elapsedHours > 1 ? 's' : ''} ago`;
    } else {
      return 'Yesterday';
    }
  };

  const orderOptions = orders.map(order => ({
    value: order.id,
    label: order.productName,
  }));

  return (
    <div className="order-list">
      <div className="order-list-header">
        <h5 className="order-list-title">OrderList</h5>
        <FaSearch className="search-icon" onClick={handleSearchClick} />
        {showSearch && (
          <div className="search-dropdown">
            <Select
              options={orderOptions}
              placeholder="Search for an order..."
              onChange={(selectedOption) => {
                const selectedOrder = orders.find(order => order.id === selectedOption.value);
                onSelectOrder(selectedOrder);
              }}
            />
          </div>
        )}
      </div>
      <Nav variant="tabs" defaultActiveKey="All" className="mb-3">
        <Nav.Item>
          <Nav.Link 
            eventKey="All" 
            onClick={() => handleTabSelect('All')} 
            className={activeTab === 'All' ? 'active-tab' : ''}
          >
            All
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link 
            eventKey="Shipped" 
            onClick={() => handleTabSelect('Shipped')} 
            className={activeTab === 'Shipped' ? 'active-tab' : ''}
          >
            Shipped
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link 
            eventKey="Delivered" 
            onClick={() => handleTabSelect('Delivered')} 
            className={activeTab === 'Delivered' ? 'active-tab' : ''}
          >
            Delivered
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link 
            eventKey="Processing" 
            onClick={() => handleTabSelect('Processing')} 
            className={activeTab === 'Processing' ? 'active-tab' : ''}
          >
            Processing
          </Nav.Link>
        </Nav.Item>
      </Nav>
      <ListGroup>
        {filteredOrders.map(order => (
          <ListGroup.Item
            key={order.id}
            action
            onClick={() => onSelectOrder(order)}
            className="cursor-pointer d-flex align-items-center order-list-item"
          >
            <div className="order-info">
              <div className="order-name">{order.productName}</div>
              <div className="order-status">
                <span className="order-details">{order.orderDetails}</span>
                <div className="time-elapsed">{getTimeElapsed(order.orderDate)}</div>
              </div>
            </div>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
}

export default OrderList;
