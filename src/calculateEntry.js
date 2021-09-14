const { prices } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const entrants = [
  { name: 'Lara Carvalho', age: 5 },
  { name: 'Frederico Moreira', age: 5 },
  { name: 'Pedro Henrique Carvalho', age: 5 },
  { name: 'Maria Costa', age: 18 },
  { name: 'Núbia Souza', age: 18 },
  { name: 'Carlos Nogueira', age: 50 },
];

function countEntrants(entrants) {
  const child = entrants.filter(({ age }) => age < 18).length;
  const adult = entrants.filter(({ age }) => (age >= 18 && age < 50)).length;
  const senior = entrants.filter(({ age }) => age >= 50).length;
  const objectEntrantes = { child, adult, senior };
  return objectEntrantes;
}

function calculateEntry(entrants) {
  if (!entrants) return 0;
  if (Object.keys(entrants).length === 0) return 0;
  let { child, adult, senior } = prices;
  child *= countEntrants(entrants).child;
  adult *= countEntrants(entrants).adult;
  senior *= countEntrants(entrants).senior;
  const result = child + adult + senior;
  return result;
}

module.exports = { calculateEntry, countEntrants };
