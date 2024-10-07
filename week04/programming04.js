//8번
//index.mjs
import { odd, even } from './var.mjs';
import checkNumber from './func.mjs';

function checkStringOddOrEven(str) {
  if (str.length % 2) { // 홀수면
    return odd;
  }
    return even;
}

console.log(checkNumber(10));
console.log(checkStringOddOrEven('node.js_team2'));

//9번
//9
let i=5;
setInterval(() => {
    if (i===1) {
        console.log('종료');
        process.exit();
    }
    console.log(i);
    i--;
}, 500);