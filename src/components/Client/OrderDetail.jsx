// src/components/OrderBoard/OrderDetail.js
import React from 'react';
import './Style.css'; // Ensure this CSS file is correctly linked

function OrderDetail({ order }) {
  return (
    <div className="order-detail">
      <div className="order-detail-header">
        <h5>Order Details</h5>
      </div>
      <div className="order-detail-body">
        <p><strong>Order ID:</strong> {order.id}</p>
        <p><strong>Name:</strong> {order.name}</p>
        <p><strong>Description:</strong> {order.description}</p>
        <p><strong>Date:</strong> {new Date(order.orderDate).toLocaleString()}</p>
        <p><strong>Status:</strong> {order.status}</p>
      </div>
    </div>
  );
}

export default OrderDetail;