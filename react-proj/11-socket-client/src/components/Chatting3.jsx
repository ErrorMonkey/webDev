import React, { useCallback, useEffect, useMemo, useState } from 'react';
import '../styles/chat.css';
import Chat from './Chat';
import Notice from './Notice';
import io from 'socket.io-client';

const socket = io.connect('http://localhost:8000', { autoConnect: false });

function Chatting2() {
  const [useridInput, setUseridInput] = useState('');
  const [msgInput, setMsgInput] = useState('');
  const [userId, setUserId] = useState(null);
  const [chatList, setChatList] = useState([]);
  const [userList, setuserList] = useState([]);
  const [dmTo, setDmTo] = useState('all');
  const [room, setRoom] = useState('frontEnd');

  const initSocketConnect = () => {
    if (!socket.connected) socket.connect();
  };

  const entryChat = () => {
    initSocketConnect();
    socket.emit('entry', { userId: useridInput, room: room });
    // [실습 3-2] 바로 userId에 값을 할당하지 않고 예외처리
  };

  const sendMsg = () => {
    if (msgInput !== '') {
      socket.emit('sendMsg', { userId: userId, msg: msgInput, dm: dmTo });
      setMsgInput('');
    }
  };

  // 이벤트라 useEffect 밖에서는 계속 실행되는 건가?
  useEffect(() => {
    socket.on('error', (res) => alert(res.msg));
    socket.on('entrySucces', (res) => setUserId(res.userId));
    socket.on('userList', (userIdArr) => setuserList(userIdArr));
  }, []);

  // useMemo: 값을 메모라이징 한다.
  // 의존성 배열에 있는 값이 update 될 때마다 연산을 실행함
  const userListOptions = useMemo(() => {
    const options = [];
    for (const key in userList) {
      // key: userList의 key
      // userList[key]: userList의 value 값
      if (userList[key] === useridInput) continue;
      options.push(
        <option key={key} value={key}>
          {userList[key]}
        </option>
      );
    }
    return options;
  }, [userList]);

  // useCallback: 함수를 메모라이징 한다
  // 뒤에 있는 의존성 배열에 있는 값이 update 될 때만 함수를 다시 선언함
  const addChatList = useCallback(
    (res) => {
      const type = res.userId === userId ? 'my' : 'other';
      let content = '';
      let newChatList = [];
      if (type === 'my') {
        content = `${res.dm ? '(속닥속닥)' : ''} ${res.msg}`;
      } else if (type === 'other') {
        content = `${res.dm ? '(속닥속닥)' : ''} ${res.userId}: ${res.msg}`;
      }
      newChatList = [...chatList, { type: type, content: content }];
      setChatList(newChatList);
    },
    [userId, chatList]
  );

  useEffect(() => {
    socket.on('chat', addChatList);
    return () => socket.off('chat', addChatList);
  }, [addChatList]);

  useEffect(() => {
    const notice = (res) => {
      console.log('연결');
      const newChatList = [...chatList, { type: 'notice', content: res.msg }];
      setChatList(newChatList);
    };

    socket.on('notice', notice);

    return () => socket.off('notice', notice);
  }, [chatList]);

  return (
    <>
      <h3>실습 4번, 5번</h3>
      <ul>
        <li>채팅창 메세지 전송</li>
        <li>DM 기능 구현</li>
      </ul>
      <div className="container overflow-y-auto absolute border-2 border-slate-200 shadow-xl rounded-2xl w-[320px] h-[500px] translate-x-[-50%] left-[50%]">
        {userId ? (
          <>
            <div className="px-5 pt-2 font-bold text-xl text-blue-500">{userId}님 환영합니다.</div>
            <div className="p-4">
              <div className="chat-container">
                {chatList.map((chat, i) => {
                  if (chat.type === 'notice') return <Notice chat={chat} />;
                  else return <Chat chat={chat} />;
                })}
              </div>
              <div className="input-container absolute bottom-3 flex justify-between gap-1">
                <select
                  className="bg-slate-100 text-sm"
                  value={dmTo}
                  onChange={(e) => {
                    setDmTo(e.target.value);
                  }}
                >
                  <option value="all">전체</option>
                  {userListOptions.map((el) => el)}
                </select>
                <input
                  className="bg-slate-200 p-1 rounded-lg shadow-inner focus:bg-slate-50 focus:border-blue-100"
                  type="text"
                  value={msgInput}
                  onChange={(e) => setMsgInput(e.target.value)}
                />
                <button
                  className="shadow-sm px-2 rounded-lg border border-blue-500"
                  onClick={sendMsg}
                >
                  전송
                </button>
              </div>
            </div>
          </>
        ) : (
          <div className="input-container flex flex-col gap-2 px-2 py-4 items-center">
            <div className="text-xl font-bold mt-10">새싹 채팅방에 오신 걸 환영합니다!</div>
            <div className="mt-10">
              채팅방을 선택해주세요.
              <select
                value={room}
                onChange={(e) => {
                  setRoom(e.target.value);
                }}
                className="bg-slate-100 rounded-lg text-blue-500 p-1 ml-2"
              >
                <option value="frontEnd">프론트엔드</option>
                <option value="backEnd">백엔드</option>
                <option value="full">풀스택</option>
              </select>
            </div>
            <div className="mt-2">
              <input
                type="text"
                className="bg-slate-200 p-2 rounded-lg"
                value={useridInput}
                placeholder="닉네임을 작성해주세요"
                onChange={(e) => setUseridInput(e.target.value)}
                required
              />
              <button
                className="bg-blue-200 hover:bg-blue-500 px-3 py-2 ml-2 hover:font-bold hover:text-white rounded-lg"
                onClick={entryChat}
              >
                입장
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Chatting2;
