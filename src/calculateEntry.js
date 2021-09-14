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

const contador = {
  child: 0,
  adult: 0,
  senior: 0,
}
function countEntrants(entrants) {
  entrants.filter((entrant) => {
    if(entrant.age < 18) {
      contador.child += 1;
    } else if (entrant.age < 50) {
      contador.adult += 1;
    }
    else contador.senior += 1;
  });
  return contador;
}

function calculateEntry(entrants) {
  
}

console.log(countEntrants(entrants));
console.log(calculateEntry(entrants));

module.exports = { calculateEntry, countEntrants };
