//8. createWriteStream으로 쓰기 스트림을 만들어보시오.//
const fs=require('fs');
const writeStream=fs.writeStream('/text.txt');
writeStream.on('finish', ()=>{
    console.log('파일쓰기 완료');
});
writeStream.write('이 글을 씁니다.');
writeStream.end();

//9. 비동기 방식 코드를 알맞게 채우시오.//
const fs=require('fs');
console.log('시작');
fs.readFile('./readtext.txt', (err,data)=>{
    if(err){
        throw err;
    }
    console.log('1번', data.toString());
    fs.readFile('./readtext.txt', (err,data)=>{
        if(err){
            throw err;
        }
    console.log('2번',data.toString());
    fs.readFile('./readtext.txt', (err,data)=>{
        if(err){
            throw err;
        }    
        console.log('3번',data.toString());
        console.log('끝');
         });
    });
});
   
