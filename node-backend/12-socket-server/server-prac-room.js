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
// { socket.id: res.userId, socket.id: res.userId,}

const updateUserList = async (userRoomId) => {
  let sameRoomUsers = [];
  for (let user of Object.values(userIdArr)) {
    if (user.roomId === userRoomId) sameRoomUsers.push(user.userId);
  }
  // console.log('sameRoomUsers', sameRoomUsers);
  // io.emit('userList', userIdArr);
  io.emit('userList', sameRoomUsers);
};

io.on('connection', (socket) => {
  console.log('socket id: ', socket.id);

  socket.on('entry', async (res) => {
    let isUserId = false;
    // 접속한 유저들의 정보가 담긴 객체에서 이름만 조회하기
    for (let id of Object.values(userIdArr)) {
      if (res.userId === id.userId) isUserId = true;
    }

    // [실습 3-2번]
    // 상황(닉네임이 중복)에 따라 정상적으로 notice를 하거나
    // 중복이라는 오류 메시지를 보내주기
    if (isUserId) socket.emit('error', { msg: `닉네임이 중복됩니다.` });
    else {
      socket.join(res.roomId);
      userIdArr[socket.id] = { userId: res.userId, roomId: res.roomId };
      await updateUserList(res.roomId);
      io.sockets.in(res.roomId).emit('notice', { msg: `${res.userId}님이 입장했습니다.` });
      socket.emit('entrySucces', { userId: res.userId });

      console.log('userIdArr: ', userIdArr);
    }
  });

  socket.on('sendMsg', (res) => {
    if (res.dm === 'all') io.in(res.roomId).emit('chat', { userId: res.userId, msg: res.msg });
    else {
      // io.to(소켓 아이디).emit()
      io.in(res.roomId).to(res.dm).emit('chat', { userId: res.userId, msg: res.msg, dm: true });
      socket.in(res.roomId).emit('chat', { userId: res.userId, msg: res.msg, dm: true });
    }
  });

  socket.on('disconnect', () => {
    io.to(userIdArr[socket.id].roomId).emit('notice', {
      msg: `${userIdArr[socket.id].userId}님이 퇴장했습니다.`,
    });
    delete userIdArr[socket.id];
    updateUserList();
  });
});

server.listen(PORT, function () {
  console.log(`Sever Open: ${PORT}`);
});
