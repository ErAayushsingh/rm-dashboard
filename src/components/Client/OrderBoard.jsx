// src/components/OrderBoard/OrderBoard.js
import React, { useState } from 'react';
import './Style.css'; // Ensure this CSS file is correctly linked
import { FaSearch } from 'react-icons/fa';
import Select from 'react-select';
import { Container, Row, Col } from 'react-bootstrap';
import OrderDetail from './OrderDetail'; // Import the OrderDetail component

// Example data for the order board
const orders = [
  { id: 1, name: 'Order #1', description: 'Description of Order #1', orderDate: new Date(Date.now() - 6000000).toISOString(), status: 'Pending' },
  { id: 2, name: 'Order #2', description: 'Description of Order #2', orderDate: new Date(Date.now() - 36000000).toISOString(), status: 'Completed' },
  { id: 3, name: 'Order #3', description: 'Description of Order #3', orderDate: new Date(Date.now() - 144000000).toISOString(), status: 'Pending' },
  // Add more orders as needed
];

function OrderBoard() {
  const [showSearch, setShowSearch] = useState(false);
  const [filter, setFilter] = useState('All');
  const [selectedOrder, setSelectedOrder] = useState(null);

  const handleSearchClick = () => {
    setShowSearch(!showSearch);
  };

  const handleFilterChange = (selectedOption) => {
    setFilter(selectedOption.value);
  };

  const filteredOrders = orders.filter(order =>
    filter === 'All' || order.status === filter
  );

  const getTimeElapsed = (orderDate) => {
    const now = new Date();
    const orderDateTime = new Date(orderDate);
    const elapsedMinutes = Math.floor((now - orderDateTime) / 60000);
    
    if (elapsedMinutes < 60) {
      return `${elapsedMinutes} minute${elapsedMinutes > 1 ? 's' : ''} ago`;
    } else if (elapsedMinutes < 1440) {
      const elapsedHours = Math.floor(elapsedMinutes / 60);
      return `${elapsedHours} hour${elapsedHours > 1 ? 's' : ''} ago`;
    } else {
      return 'Yesterday';
    }
  };

  const orderOptions = [
    { value: 'All', label: 'All' },
    { value: 'Pending', label: 'Pending' },
    { value: 'Completed', label: 'Completed' }
  ];

  return (
    <Container className='mt-2' fluid>
      <Row>
        <Col xs={12} md={3} className="order-board-col">
          <div className="order-board">
            <div className="order-board-header">
              <h5 className="order-board-title">Order Board</h5>
              <FaSearch className="search-icon" onClick={handleSearchClick} />
              {showSearch && (
                <div className="search-dropdown">
                  <Select
                    options={orderOptions}
                    placeholder="Filter by status..."
                    onChange={handleFilterChange}
                  />
                </div>
              )}
            </div>
            <div className="order-list">
              <ul>
                {filteredOrders.map(order => (
                  <li
                    key={order.id}
                    onClick={() => setSelectedOrder(order)}
                    className="order-list-item"
                  >
                    <div className="order-info">
                      <div className="order-name">{order.name}</div>
                      <div className="order-description">
                        <span>{order.description}</span>
                        <div className="time-elapsed">{getTimeElapsed(order.orderDate)}</div>
                      </div>
                    </div>
                    <div className="order-status">{order.status}</div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Col>
        <Col xs={12} md={3} className="order-detail-col">
          {selectedOrder && <OrderDetail order={selectedOrder} />}
        </Col>
      </Row>
    </Container>
  );
}

export default OrderBoard;
