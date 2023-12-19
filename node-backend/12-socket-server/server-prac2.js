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

io.on('connection', (socket) => {
  console.log('socket id: ', socket.id);
  console.log('userIdArr: ', userIdArr);

  // [실습 3-1번] 입장 시에 받은 userid로 입장 공지
  socket.on('entry', (res) => {
    const valueCheckArr = Object.values(userIdArr);
    console.log('valueCheckArr: ', valueCheckArr);
    const isUserId = valueCheckArr.includes(res.userId);
    console.log('isUserId', isUserId);

    // [실습 3-2번]
    // 상황(닉네임이 중복)에 따라 정상적으로 notice를 하거나
    // 중복이라는 오류 메시지를 보내주기
    if (isUserId) socket.emit('error', { msg: `닉네임이 중복됩니다.` });
    else {
      userIdArr[socket.id] = res.userId;
      io.emit('notice', { msg: `${res.userId}님이 입장했습니다.` });
      socket.emit('succes', { userId: res.userId });

      console.log('userIdArr', userIdArr);
    }
  });

  socket.on('disconnect', () => {
    io.emit('notice', { msg: `${userIdArr[socket.id]}님이 퇴장했습니다.` });
    delete userIdArr[socket.id];
  });
});

server.listen(PORT, function () {
  console.log(`Sever Open: ${PORT}`);
});
