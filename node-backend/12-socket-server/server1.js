const http = require('http');
const express = require('express');
const { Socket } = require('socket.io');
const app = express();
// 소켓이 http 모듈로 생성된 서버에서만 동작
const server = http.createServer(app);
const PORT = 8000;

// const Socket = require('socket.io');
// const io = Socket(server);
const io = require('socket.io')(server);

app.set('view engine', 'ejs');

// req.body 를 해석하기 위한 코드
// x-www-form-urlencoded 형태의 데이터를 해석
// extended: true일 경우 qs 모듈(외부 모듈)을 이용한다. false일 경우, 내장 모듈인 queryString을 사용한다.
app.use(express.urlencoded({ extended: true }));
// aplication/json 형태의 데이터를 해석
app.use(express.json());

// localhost:8000 url 접속에 대한 응답을 위해 만든 코드
app.get('/', function (req, res) {
  res.render('client1');
});

io.on('connection', (socket) => {
  // 콜백 함수의 매개 변수에 있는 socket 객체
  // 접속한 클라이언트의 소켓
  console.log('socket id: ', socket.id);

  // on을 이용해, 클라이언트에서 socket을 이용해 보내준 데이터를
  // 받을 이벤트를 등록함
  socket.on('hello', (res) => {
    // res: socket 이용해 보내준 데이터
    console.log('res: ', res);
    socket.emit('bye', { msg: '안녕히 가세요-' });
  });

  socket.on('entry', (res) => {
    console.log('res', res);
    io.emit('notice', { msg: `${socket.id} 님이 입장함.` });
  });

  socket.on('pracEmit', (res) => {
    console.log('pracEmit res: ', res);
    io.emit('pracRes', { msg: `'msg: ${res}' 서버 전달 완료` });
  });
});

server.listen(PORT, function () {
  console.log(`Sever Open: ${PORT}`);
});
