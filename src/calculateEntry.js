const data = require('../data/zoo_data');

function countEntrants(entrants) {
  // seu código aqui
  const visitantes = { child: 0, adult: 0, senior: 0 };
  entrants.forEach(({ age } = entrants) => {
    if (age < 18) {
      visitantes.child += 1;
    }
    if (age >= 50) {
      visitantes.senior += 1;
    } else {
      visitantes.adult += 1;
    }
  });
  return visitantes;
}
// console.log(countEntrants([{ name: 'Lara Carvalho', age: 5 },
//   { name: 'Frederico Moreira', age: 5 },
//   { name: 'Pedro Henrique Carvalho', age: 5 },
//   { name: 'Maria Costa', age: 18 },
//   { name: 'Núbia Souza', age: 18 },
//   { name: 'Carlos Nogueira', age: 50 },
// ]));

function calculateEntry(entrants) {
  // seu código aqui
  if (entrants !== undefined && Object.keys(entrants).length !== 0) {
    const visitantes = countEntrants(entrants);
    const { child, adult, senior } = visitantes;
    return (child * prices.child) + (adult * prices.adult) + (senior * prices.senior);
  }
  return 0;
}

module.exports = { calculateEntry, countEntrants };


// const entrants = [
//   { name: 'Lara Carvalho', age: 5 },
//   { name: 'Frederico Moreira', age: 5 },
//   { name: 'Pedro Henrique Carvalho', age: 5 },
//   { name: 'Maria Costa', age: 18 },
//   { name: 'Núbia Souza', age: 18 },
//   { name: 'Carlos Nogueira', age: 50 },
//  ];
//  child: 3, adult: 2, senior: 1 