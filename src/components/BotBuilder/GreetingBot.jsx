import React from 'react';
import { Button, Alert } from 'react-bootstrap';

function GreetingBot() {
  const handleClick = () => {
    alert("Hello! How can I assist you today?");
  };

  return (
    <div>
      <h3>Greeting Bot</h3>
      <Button onClick={handleClick} variant="primary">Get Greeting</Button>
    </div>
  );
}

export default GreetingBot;
