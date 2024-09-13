import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Chat.css';

function ChatWindow({ user }) {
  const [messages, setMessages] = useState([
    { id: 1, text: 'Hello!', time: '10:30 AM', sent: false },
    { id: 2, text: 'Hi there!', time: '10:32 AM', sent: true },
    // Add more messages if needed for testing
  ]);
  const [newMessage, setNewMessage] = useState('');

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (newMessage.trim() === '') return;

    const newMessageObj = {
      id: messages.length + 1,
      text: newMessage,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      sent: true,
    };

    setMessages([...messages, newMessageObj]);
    setNewMessage('');
  };

  return (
    <Container fluid className="chat-window">
      {user ? (
        <div className="chat-window-content" style={{ position: 'relative', height: '100%' }}>
          <div className="chat-header">
            <img
              src={user.profileImg}
              alt={user.name}
              className="profile-img"
            />
            <div className="chat-header-info">
              <h5 className="chat-user-name">{user.name}</h5>
              <div className={`chat-user-status ${user.online ? 'online' : 'offline'}`}>
                {user.online ? 'Online' : 'Offline'}
              </div>
            </div>
          </div>
          <div className="chat-messages">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`message ${message.sent ? 'message-sent' : 'message-received'}`}
                
              >
                <div className="message-text">{message.text}
                    <div className="message-time">{message.time}</div>
               </div>
              </div>
            ))}
          </div>
          <Form onSubmit={handleSendMessage} className="message-input">
            <Row>
              <Col>
                <Form.Control
                  type="text"
                  placeholder="Type a message"
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                />
              </Col>
              <Col xs="auto">
                <Button variant="outline-success" type="submit">Send</Button>
              </Col>
            </Row>
          </Form>
        </div>
      ) : (
        <p>Select a user to start chatting</p>
      )}
    </Container>
  );
}

export default ChatWindow;
