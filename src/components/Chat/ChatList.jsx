import React from 'react';
import { ListGroup } from 'react-bootstrap';

function ChatList() {
  return (
    <ListGroup variant="flush" className="overflow-auto h-100">
      <ListGroup.Item>Chat 1</ListGroup.Item>
      <ListGroup.Item>Chat 2</ListGroup.Item>
      <ListGroup.Item>Chat 3</ListGroup.Item>
      {/* Add more chats */}
    </ListGroup>
  );
}

export default ChatList;
