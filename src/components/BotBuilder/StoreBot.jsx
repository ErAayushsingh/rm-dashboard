import React, { useState } from 'react';
import { Button, Form, Alert } from 'react-bootstrap';

function StoreBot() {
  const [query, setQuery] = useState('');
  const [response, setResponse] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setResponse(`Store response for query: ${query}`);
  };

  return (
    <div>
      <h3>Store Bot</h3>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="storeQuery">
          <Form.Label>Ask about the Store</Form.Label>
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

export default StoreBot;


