const data = require('../data/zoo_data');

const { prices } = data;

const entrants = [
  { name: 'Lara Carvalho', age: 5 },
  { name: 'Frederico Moreira', age: 5 },
  { name: 'Pedro Henrique Carvalho', age: 5 },
  { name: 'Maria Costa', age: 18 },
  { name: 'Núbia Souza', age: 18 },
  { name: 'Carlos Nogueira', age: 50 },
];


function countEntrants(entrants) {
  const contador = {
    child: 0,
    adult: 0,
    senior: 0,
  }
  entrants.forEach((entrant) => {
    if(entrant.age < 18) {
      contador.child += 1;
    }
    if (entrant.age < 50 && entrant.age >= 18) {
      contador.adult += 1;
    }
    if(entrant.age >= 50) {
    contador.senior += 1;
    }
      
  });
  return contador;
}
function calculateEntry(entrants) {
  if (!entrants || Object.entries(entrants).length === 0) {
    return 0;
  } 
  const contador = countEntrants(entrants);
  const totalChild = contador.child * prices.child;
  const totalAdult = contador.adult * prices.adult;
  const totalSenior = contador.senior * prices.senior;
  const total = totalChild + totalAdult + totalSenior;
  return total;

}
console.log(calculateEntry(entrants));
// const totalEntry = prices.find(() => {
//   if (Object.keys(prices) === Object.keys(entrants)) {
//     return Object.values(prices) * Object.values(entrants);
//   }
// });
// return totalEntry;

module.exports = { calculateEntry, countEntrants };
