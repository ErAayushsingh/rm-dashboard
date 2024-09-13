import React, { useState } from 'react';
import { Button, Form, Alert } from 'react-bootstrap';

function AppointmentBot() {
  const [details, setDetails] = useState('');
  const [response, setResponse] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setResponse(`Appointment scheduled with details: ${details}`);
  };

  return (
    <div>
      <h3>Appointment Bot</h3>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="appointmentDetails">
          <Form.Label>Provide Appointment Details</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter details"
            value={details}
            onChange={(e) => setDetails(e.target.value)}
          />
        </Form.Group>
        <Button variant="primary" type="submit">Submit</Button>
      </Form>
      {response && <Alert variant="info" className="mt-3">{response}</Alert>}
    </div>
  );
}

export default AppointmentBot;
