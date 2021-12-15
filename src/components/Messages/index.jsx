import React from 'react';

import ScrollToBottom from 'react-scroll-to-bottom';

import Chat from './Message';

import './Messages.css';

const Messages = ({ messages, name }) => (
  <ScrollToBottom className="messages">
    {messages.map((message, i) => (
      <Chat message={message} name={name} key={i} />
    ))}
  </ScrollToBottom>
);

export default Messages;