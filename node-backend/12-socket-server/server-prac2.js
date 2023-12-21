const http = require('http');
const express = require('express');
const app = express();
const server = http.createServer(app);
const PORT = 8000;

const cors = require('cors');
app.use(cors());

const io = require('socket.io')(server, {
  cors: {
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST'],
  },
});

const userIdArr = {};
// { 'socket.id' : 'userId', 'socket.id' : 'userId'}

const updateUserList = () => {
  io.emit('userList', userIdArr);
};

io.on('connection', (socket) => {
  // socket.join('')
  console.log('socket id: ', socket.id);
  console.log('userIdArr: ', userIdArr);

  // [실습 3-1번] 입장 시에 받은 userid로 입장 공지
  socket.on('entry', (res) => {
    // 객체의 value만 뽑아서 배열을 만드는 메소드
    const checkValueArr = Object.values(userIdArr);
    // 문자열이나 배열에 인자로 넘겨준 값이 존재하는지 boolean으로 반환
    // indexOf: 배열에 인자로 넘겨준 값의 인덱스를 반환, 없다면 -1 반환
    const isUserId = checkValueArr.includes(res.userId);

    // [실습 3-2번]
    // 상황(닉네임이 중복)에 따라 정상적으로 notice를 하거나
    // 중복이라는 오류 메시지를 보내주기
    if (isUserId) socket.emit('error', { msg: `닉네임이 중복됩니다.` });
    else {
      userIdArr[socket.id] = res.userId;
      updateUserList();
      // io.emit은 모든 클라이언트에게 보내는 이벤트
      io.emit('notice', { msg: `${res.userId}님이 입장했습니다.` });
      socket.emit('entrySucces', { userId: res.userId });

      console.log('userIdArr', userIdArr);
    }
  });

  socket.on('sendMsg', (res) => {
    if (res.dm === 'all') io.emit('chat', { userId: res.userId, msg: res.msg });
    else {
      // io.to(소켓 아이디).emit()
      io.to(res.dm).emit('chat', { userId: res.userId, msg: res.msg, dm: true });
      socket.emit('chat', { userId: res.userId, msg: res.msg, dm: true });
    }
  });

  socket.on('disconnect', () => {
    io.emit('notice', { msg: `${userIdArr[socket.id]}님이 퇴장했습니다.` });
    delete userIdArr[socket.id];
    updateUserList();
  });
});

server.listen(PORT, function () {
  console.log(`Sever Open: ${PORT}`);
});
