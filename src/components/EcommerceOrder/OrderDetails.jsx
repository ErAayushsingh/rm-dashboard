// src/components/Order/OrderDetails.js
import React from 'react';
import './Style.css';

function OrderDetails({ order }) {
  if (!order) return <div className="order-details">Select an order to see details.</div>;

  return (
    <div className="order-details">
      <h5 className="order-details-title">Order Details</h5>
      <div className="order-details-content">
        <div className="order-details-item">
          <strong>Product Name:</strong> {order.productName}
        </div>
        <div className="order-details-item">
          <strong>Details:</strong> {order.orderDetails}
        </div>
        <div className="order-details-item">
          <strong>Order Date:</strong> {new Date(order.orderDate).toLocaleDateString()}
        </div>
        <div className="order-details-item">
          <strong>Status:</strong> {order.status}
        </div>
      </div>
    </div>
  );
}

export default OrderDetails;
