const data = require('../data/zoo_data');

function countEntrants(entrants) {
  const objModel = { child: 0, adult: 0, senior: 0 };

  entrants.forEach(({ age }) => {
    // console.log(entrants)
    if (age < 18) {
      objModel.child += 1;
    } else if (age >= 18 && age < 50) {
      objModel.adult += 1;
    } else objModel.senior += 1;
  });

  return objModel;
}

function calculateEntry(entrants) {
  if (!entrants || Object.keys(entrants).length === 0) {
    return 0;
  }

  const { prices } = data;
  const totalEntrants = countEntrants(entrants);
  const childs = totalEntrants.child * prices.child;
  const adult = totalEntrants.adult * prices.adult;
  const senior = totalEntrants.senior * prices.senior;

  return childs + adult + senior;
}

const entrants = [
  { name: 'Lara Carvalho', age: 5 },
  { name: 'Frederico Moreira', age: 5 },
  { name: 'Pedro Henrique Carvalho', age: 5 },
  { name: 'Maria Costa', age: 18 },
  { name: 'Núbia Souza', age: 18 },
  { name: 'Carlos Nogueira', age: 50 },
];
countEntrants(entrants);

module.exports = { calculateEntry, countEntrants };
