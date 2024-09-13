import React from 'react';
import GreetingBot from './GreetingBot';
import AppointmentBot from './AppointmentBot';
import StoreBot from './StoreBot';
import SalonBot from './SalonBot';
import { Container, Row, Col } from 'react-bootstrap';

function BotBuilder() {
  return (
    <Container className="mt-4">
    <Row>
      <Col md={6} className="mb-4">
        <GreetingBot />
      </Col>
      <Col md={6} className="mb-4">
        <AppointmentBot />
      </Col>
    </Row>
    <Row>
      <Col md={6} className="mb-4">
        <StoreBot />
      </Col>
      <Col md={6} className="mb-4">
        <SalonBot />
      </Col>
    </Row>
  </Container>
  );
}

export default BotBuilder;
