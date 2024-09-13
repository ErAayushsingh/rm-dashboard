import React, { useState } from 'react';
import { Button, Form, Alert } from 'react-bootstrap';

function SalonBot() {
  const [query, setQuery] = useState('');
  const [response, setResponse] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setResponse(`Salon response for query: ${query}`);
  };

  return (
    <div>
      <h3>Salon Bot</h3>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="salonQuery">
          <Form.Label>Ask about the Salon</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your query"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </Form.Group>
        <Button variant="primary" type="submit">Submit</Button>
      </Form>
      {response && <Alert variant="info" className="mt-3">{response}</Alert>}
    </div>
  );
}

export default SalonBot;
