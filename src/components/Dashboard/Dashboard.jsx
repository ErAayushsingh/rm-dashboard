import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Sidebar from './Sidebar';

function Dashboard() {
  return (
    <Container fluid>
      <Row>
        <Col xs={12} md={3} lg={2} className="p-0">
          <Sidebar />
        </Col>
        <Col xs={12} md={9} lg={10}>
          {/* Dynamic content will be rendered here */}
        </Col>
      </Row>
    </Container>
  );
}

export default Dashboard;
