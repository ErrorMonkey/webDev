import React, { useEffect, useState } from 'react';
import '../styles/chat.css';
import Chat from './Chat';
import Notice from './Notice';
import io from 'socket.io-client';

const socket = io.connect('http://localhost:8000', { autoConnect: false });

function Chatting2() {
  const [useridInput, setUseridInput] = useState('');
  const [msgInput, setMsgInput] = useState('');
  const [userId, setUserId] = useState(null);
  const [chatList, setChatList] = useState([
    {
      type: 'my',
      content: 'ㅎㅇ',
    },
    {
      type: 'other',
      content: '나가',
    },
    {
      type: 'notice',
      content: '~~님이 입장하셨습니다.',
    },
    {
      type: 'my',
      content: '님 신고',
    },
  ]);

  const initSocketConnect = () => {
    if (!socket.connected) socket.connect();
  };

  useEffect(() => {
    // initSocketConnect();
  }, []);

  useEffect(() => {
    const notice = (res) => {
      console.log('연결');
      const newChatList = [...chatList, { type: 'notice', content: res.msg }];
      setChatList(newChatList);
    };

    socket.on('notice', notice);

    return () => socket.off('notice', notice);
  }, [chatList]);

  const sendMsg = () => {
    socket.emit('sendMsg', { id: userId, msg: msgInput });
  };

  const entryChat = () => {
    initSocketConnect();
    socket.emit('entry', { userId: useridInput });
    // [실습 3-2] 바로 userId에 값을 할당하지 않고 예외처리
  };

  // 이벤트라 useEffect 밖에서는 계속 실행되는 건가?
  useEffect(() => {
    socket.on('error', (res) => alert(res.msg));
    socket.on('entrySucces', (res) => setUserId(res.userId));
  }, []);

  return (
    <>
      <h3>실습 3-1, 3-2, 3-3번</h3>
      <ul>
        <li>닉네임 입력 받고 입장 시키기</li>
        <li>닉네임 중복 방지</li>
        <li>퇴장 시키기</li>
      </ul>

      {userId ? (
        <>
          <div>{userId}님 환영합니다.</div>
          <div className="chat-container">
            {chatList.map((chat, i) => {
              if (chat.type === 'notice') return <Notice chat={chat} />;
              else return <Chat chat={chat} />;
            })}
          </div>
          <div className="input-container">
            <input type="text" value={msgInput} onChange={(e) => setMsgInput(e.target.value)} />
            <button onClick={sendMsg}>전송</button>
          </div>
        </>
      ) : (
        <div className="input-container">
          <input type="text" value={useridInput} onChange={(e) => setUseridInput(e.target.value)} />
          <button onClick={entryChat}>입장</button>
        </div>
      )}
    </>
  );
}

export default Chatting2;
