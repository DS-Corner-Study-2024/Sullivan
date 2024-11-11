//8. http 모듈을 사용하여 HTTP 서버를 생성하시오. 서버는 8081번 포트에서 실행된다.//
const http=requier('http');

http.createServer((req,res)=>{
    res.writeHead(200, {'Content-Type':'text/html; charset=utf-8'})
    res.write('<h1>http 모듈을 사용한 HTTP 서버</h1>');
    res.end('<p>8081번 포트에서 실행되는 서버</p>');
})
    .listen(8081, ()=>{
        console.log('8081번 포트에서 서버 대기 중입니다.');
    })

//9. 쿠키를 만들어 브라우저에 넣는 코드이다. 1~4번 주석을 채우시오.//
const http = require("http");

http.createServer((req, res)=>{
    console.log(req.url,res.headers.cookie);
    res.writeHead(200, {'Set-Cookie' : 'mycookie=test'});
    res.end('Hello Cookie');
}).listen(8083, () => {
    console.log("8083번 포트에서 서버 대기 중입니다!");
});