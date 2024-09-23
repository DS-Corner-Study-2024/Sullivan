//Parameters and Arguments//
function sayThanks(name) {
    console.log('Thank you for your purchase '+ name + '! We appreciate your business.');
  }
  sayThanks(Cole);
//Default Parameters//
function makeShoppingList(item1='milk', item2='bread', item3='eggs'){
    console.log(`Remember to buy ${item1}`);
    console.log(`Remember to buy ${item2}`);
    console.log(`Remember to buy ${item3}`);
  }  
//Return//
function monitorCount01(rows, columns){return rows*columns;}
const numOfMonitors=monitorCount01(5,4);
console.log(numOfMonitors)
//Helper Fuctions//
function monitorCount02(rows, columns) {
    return rows * columns;
  }
    function costOfMonitors(rows,columns){
      return monitorCount02(rows, columns)*200;
    }
  const totalCost=costOfMonitors(5,4);
  console.log(totalCost);
//Function Expressions//
const plantNeedsWater01=function (day){
    if(day==='Wednesday'){
      return true;
    }else{return false;}
  };
const check=plantNeedsWater01('Tuesday');
console.log(check);

//Arrow Functions//
const plantNeedsWater02 = (day) =>{
    if (day === 'Wednesday') {
      return true;
    } else {
      return false;
    }
  };
//Concise Body Arrow Funcions//
const plantNeedsWater03 = day => day === 'Wednesday' ? true : false;