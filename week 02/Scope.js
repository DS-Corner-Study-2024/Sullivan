//Blocks and Scope
const city='New York City';
function logCitySkyline(){
  let skyscraper='Empire State Building';
  return 'The stars over the '+skyscraper+' in '+city;
}
console.log(logCitySkyline());
//Global Scope
let satellite='The Moon';
let galaxy='The Milky Way';
let stars='North Star';

function callMyNightSky(){
  return 'Night Sky: '+satellite+', '+stars+', and '+galaxy;
}
console.log(callMyNightSky())
//Block Scope
function logVisibleLightWaves(){
    const lightWaves='Moonlight';
    console.log(lightWaves);
    }
console.log(lightWaves);    
//Scope Pollution
const satellite1 = 'The Moon';
const galaxy1 = 'The Milky Way';
let stars1 = 'North Star';

const callMyNightSky = () => {
  stars1='Sirius';
	return 'Night Sky: ' + satellite1 + ', ' + stars1 + ', ' + galaxy1;
};

console.log(callMyNightSky());
console.log(stars1);
