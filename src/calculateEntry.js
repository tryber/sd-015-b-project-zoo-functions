const data = require('../data/zoo_data');

function countEntrants(entrants) {
  const child = entrants.filter((entrant) => entrant.age < 18).length;
  const adult = entrants.filter((entrant) => entrant.age >= 18 && entrant.age < 50).length;
  const senior = entrants.filter((entrant) => entrant.age >= 50).length;

  return { child, adult, senior };
}

function calculateEntry(entrants) {
  // seu código aqui
}

const entrants = [
  { name: 'joao', age: 5 },
  { name: 'maria', age: 5 },
  { name: 'pedro', age: 5 },
  { name: 'julia', age: 18 },
  { name: 'isabela', age: 18 },
  { name: 'neide', age: 50 },
];

console.log(countEntrants(entrants));

module.exports = { calculateEntry, countEntrants };
