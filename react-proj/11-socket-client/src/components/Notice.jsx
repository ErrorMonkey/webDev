import React from 'react';

function Notice({ chat }) {
  return <div className="list notice">{chat.content}</div>;
}

export default Notice;
