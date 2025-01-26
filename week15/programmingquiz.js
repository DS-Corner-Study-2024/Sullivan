//8. 미들웨어들을 배포용으로 설정하기 위해 빈칸에 들어갈 코드를 작성하시오.
//app.js
//...
if (process.env.NODE_ENV === 'production') {  // (1)배포 환경인지 개발 환경인지를 판단할 수 있는 환경 변수
  app.enable('trust proxy');
  app.use(morgan('combined')); // (2)배포 환경일 때 morgan을 combined모드로 사용하는 코드
} else {
  app.use(morgan('dev'));
}
app.use(express.static(path.join(__dirname, 'public')));
//...

//9. XXS 공격을 막기 위해 HTML을 sanitize-html 패키지의 도움을 받아 막아야 한다. 빈칸에 들어갈 코드를 작성하시오.

const sanitizeHtml=require('sanitize-html');

const html="<script>location.href='https://gilbut.co.kr'</script>";
console.log(sanitizeHtml(html));  //---(1)