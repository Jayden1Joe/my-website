//https://www.youtube.com/watch?v=Tt_tKhhhJqY&t=1820s&ab_channel=%EC%A1%B0%EC%BD%94%EB%94%A9JoCoding

const express = require('express');
const app = express();
const port = 3000;
var cors = require('cors')

//cors안에 어떤 요청은 허용하고 어떤건 차단할지 설정할 수 있음, 비워두면 다 허용
//자세한건 npm cors 참고 ㄱㄱ
app.use(cors())

// 라우트 정의
app.get('/', (req, res) => {
  // 버튼 추가된 HTML 반환
  res.send(`
    <html>
      <body>
        <button onclick="window.location.href='/hello'">Click me</button>
        <a href='http://localhost:3000/dog'>dd</a>
      </body>
    </html>
  `);
});

app.get('/hello', (req, res) => {
  // '안녕하세요' 출력
  res.send('안녕하세요');
});

//http://localhost:3000/user?id=sdfs&name=jayden conventional
// app.get('/user', (req, res) => {
//   //const id = req.query.id;
//   const { id, name } = req.query;
//   console.log(req.query);
//   //{ id: 'sdfs', name: 'jayden', n: '1234' }

//   res.send({ id, name });
// });

// http://localhost:3000/user/jayden conventional
app.get('/sound/:name', (req, res) => {
  const q = req.params;
  let sound;
  if (q.name === 'cat') {
    sound = '야옹';
  } else if (q.name === 'dog'){
    sound = '멍멍';
  } else {
    sound = '알수없음';
  }

  console.log(q);
  
  res.send({sound: sound});
});


// 서버 실행
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});