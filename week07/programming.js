//8번//
const express = require('express'); // 1. Express 모듈을 불러오기

const app = express(); // 2. Express 모듈을 실행해 app 변수에 할당
app.set('port', process.env.PORT || 3000); // 3. 서버가 실행될 포트를 설정

app.get('/', (req, res) => { // 4. GET 요청 시 수행할 동작 정의
  res.send('Hello, Express'); // 5. 응답으로 'Hello, Express' 메시지 전송
});

app.listen(app.get('port'), () => {
  console.log(app.get('port'), '번 포트에서 대기 중'); 
});

//9번//
router.get('/', (req, res, next) => { //1. 적절한 메서드 추가
    next('route'); // 2. 두 번째와 세 번째 미들웨어를 건너뛰고, 주소와 일치하는 다음 라우터로 이동
  }, (req, res, next) => {
    console.log('실행되지 않습니다');
    next(); // 3. 다음 미들웨어로 이동
  }, (req, res, next) => {
    console.log('실행되지 않습니다');
    next(); // 4. 다음 미들웨어로 이동
  });
  
  router.____('/', (req, res) => { //5. 적절한 메서드 추가
    console.log('실행됩니다'); 
    res.send('Hello, Express'); // 6. 클라이언트에게 응답으로 'Hello, Express' 메시지 전송
  });
