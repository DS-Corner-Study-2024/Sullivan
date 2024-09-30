// 다음 배열에 담긴 숫자들을 한 줄씩 출력하도록 forEach() 메소드를 사용하여 코드를 작성하시오.//
const numbers=[10,20,30,40,50];
numbers.forEach((number)=>{console.log(number)});

//'This is a Tesla S, and the battery level is at 85%.'의 출력문이 나오도록 아래의 코드를 수정하시오.//
const car={
    brand: "Tesla",
    modle: "S",
    batteryLevel: 85,
    provideInfo(){
        return  `This is a ${this.brand} ${this.model}, and the battery level is at ${this.batteryLevel}%.`
    }
}
console.log(car.provideInfo());