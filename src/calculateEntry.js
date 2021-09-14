const data = require('../data/zoo_data');

function countEntrants(entrants) {
  const newObj = {
    child: 0,
    adult: 0,
    senior: 0,
  };

  entrants.forEach(({ age }) => {
    if (age < 18) {
      newObj.child += 1;
    } else if (age >= 18 && age < 50) {
      newObj.adult += 1;
    } else { newObj.senior += 1; }
  });

  return newObj;
}

function calculateEntry(entrants) {
  // seu código aqui
}

module.exports = { calculateEntry, countEntrants };

const entrants = [
  { name: 'Lara Carvalho', age: 5 },
  { name: 'Frederico Moreira', age: 5 },
  { name: 'Pedro Henrique Carvalho', age: 5 },
  { name: 'Maria Costa', age: 18 },
  { name: 'Núbia Souza', age: 18 },
  { name: 'Carlos Nogueira', age: 50 },
];

console.log(countEntrants(entrants));
