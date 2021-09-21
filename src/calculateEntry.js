const data = require('../data/zoo_data');

function countEntrants(entrants) {
  // seu código aqui
  const childFilter = entrants.filter((entrant) => entrant.age < 18).length;
  const adultFilter = entrants.filter((entrant) => entrant.age >= 18 && entrant.age < 50).length;
  const seniorFilter = entrants.filter((entrant) => entrant.age >= 50).length;
  const verifyAge = { child: childFilter, adult: adultFilter, senior: seniorFilter };
  return verifyAge;
}

function calculateEntry(entrants) {
  // seu código aqui
  if (entrants === undefined || Object.keys(entrants).length === 0) {
    return 0;
  }
  const valueEntrants = Object.values(countEntrants(entrants));
  return ((valueEntrants[0] * 20.99) + (valueEntrants[1] * 49.99) + valueEntrants[2] * 24.99);
}

console.log(calculateEntry([
  { name: 'Lara Carvalho', age: 5 },
  { name: 'Frederico Moreira', age: 5 },
  { name: 'Pedro Henrique Carvalho', age: 5 },
  { name: 'Maria Costa', age: 18 },
  { name: 'Núbia Souza', age: 18 },
  { name: 'Carlos Nogueira', age: 50 },
]));

module.exports = { calculateEntry, countEntrants };
