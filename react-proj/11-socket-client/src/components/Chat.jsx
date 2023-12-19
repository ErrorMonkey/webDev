import React from 'react';

function Chat({ chat }) {
  return (
    <>
      <div className={`list ${chat.type}-chat`}>
        <div className="content">{chat.content}</div>
      </div>
    </>
  );
}

export default Chat;
