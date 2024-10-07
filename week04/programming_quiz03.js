//8번
function compareNumbers(a, b) {
    return new Promise((resolve, reject) => {
        if (a > b) {
            resolve("성공!");  // 첫 번째 숫자가 더 클 때
        } else {
            reject("실패!");   // 첫 번째 숫자가 더 작거나 같을 때
        }
    });
}

async function compareNumbesAsync(a,b){
    try{
        const mesaage=await compareNumbers(a,b);
        console.log(message);
    }
    catch(error){
        console.error(error);
    }

}

//9번
const myPromise1=Promise.resolve('당신은 최고예요.');
const myPromise2=Promise.resolve('당신은 멋져요.');
const myPromise3=Promise.reject('당신은 대단해요.');

Promise.allsettled([myPromise1, myPromise2, myPromise3])
    .then((result)=>{
        console.log(result);
    })
    .catch((error)=>{
        console.error(error);
    });
